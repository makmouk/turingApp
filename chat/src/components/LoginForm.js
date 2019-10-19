//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { FormLabel, FormInput, Header, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { login } from '../actions';
import { Input } from './Input';

// create a component
class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            avatar: '',
            disabled: true
        }
    }

    onUserNameChanged(userName) {
        if (userName && userName.length > 3) {
            this.setState({
                disabled: false,
                username: userName
            });
        } else {
            this.setState({
                disabled: true
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.props.navigation.navigate('Chat');
        }
    }
    onLoginPressed() {
        const { username, avatar } = this.state;
        this.props.login({ username, avatar });
    }


    showBtnOrSpinner() {
        if (this.props.loading) return <ActivityIndicator />;
        return (
            <Button
                title='Join Chat'
                backgroundColor='#2195f3'
                disabled={this.state.disabled}
                onPress={this.onLoginPressed.bind(this)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Login', style: { color: '#fff', fontSize: 20 } }}
                />
                    <Input
                        label='Chat Name'
                        placeholder='Select Chat Name'
                        onChangeText={(username) => this.onUserNameChanged(username)}
                    />
                    <Text>{this.props.error}</Text>

                <View style={styles.btnContainer}>
                    {this.showBtnOrSpinner()}
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    },
    btnContainer: {
        marginTop: 20
    }
});

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user,
    };
}
export default connect(mapStateToProps, { login })(LoginForm);
