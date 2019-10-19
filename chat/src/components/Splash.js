//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, AsyncStorage, Text } from 'react-native';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

// create a component
class Splash extends Component {

    componentDidMount() {
        AsyncStorage.getItem('user_info')
            .then(user => {
                if (user) {

                    const userObject = JSON.parse(user);
                    this.props.loggedIn(userObject);
                } else {
                    this.props.navigation.navigate('Login');
                }
            });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.props.navigation.navigate('Chat');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loading}>Loading</Text>
                <ActivityIndicator size='large' color='#fff' />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#476DC5',
    },
    loading: {
        color: '#fff',
        fontSize: 24,
        marginRight: 10
    }
});

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    };
}
export default connect(mapStateToProps, { loggedIn })(Splash);
