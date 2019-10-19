//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, FlatList,
    Platform, Keyboard, ActivityIndicator,
    TouchableHighlight, KeyboardAvoidingView, ImageBackground
} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { sendMessage, fetchMessges } from '../actions';

import ChatItem from './ChatItem';

// create a component
class Chat extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            disabled: true
        }
    }

    componentDidMount() {
        this.props.fetchMessges();
    }

    onTyping(text) {
        if (text && text.length >= 1) {
            this.setState({
                disabled: false,
                text
            });
        } else {
            this.setState({
                disabled: true
            })
        }
    }

    onSendBtnPressed() {
        this.props.sendMessage(this.state.text, this.props.user);
        this.textInput.clear();
    }

    showListOrSpinner() {
        if (this.props.fetching) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }

        return (
            <FlatList
                inverted
                data={this.props.messages}
                renderItem={this.renderChatItem}
                keyExtractor={this.keyExtractor}
            />
        );
    }

    renderChatItem({ item }) {
        return <ChatItem message={item} />
    }

    keyExtractor = (item, index) => index.toString();

    render() {
        const extraBtnStyle = this.state.disabled ? styles.disabledBtn : styles.enabledBtn;
        return (

            <View style={styles.container}>
                <ImageBackground source={require('../img/bgImage.jpg')} style={{ width: '100%', height: '100%', flex: 1 }}>
                    <Header
                        centerComponent={{ text: 'Chat', style: { color: '#fff', fontSize: 20 } }}
                    />

                    {this.showListOrSpinner()}

                    <KeyboardAvoidingView behavior={'padding'}>
                        <View style={styles.inputBar}>

                            <TextInput
                                style={styles.textBox}
                                multiline
                                onChangeText={(text) => this.onTyping(text)}
                                ref={input => { this.textInput = input; }}
                                placeholder = "Type a message"
                            />

                            <TouchableHighlight
                                style={[styles.sendBtn, extraBtnStyle]}
                                disabled={this.state.disabled}
                                onPress={this.onSendBtnPressed.bind(this)}
                            >
                                <Text style={{ color: '#fff' }}>Send</Text>
                            </TouchableHighlight>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    textBox: {
        borderRadius: 50,
        fontSize: 20,
        paddingHorizontal: 15,
        flex: 1,
        paddingVertical: 5,
        marginLeft: 5,
        backgroundColor: 'white'
    },
    sendBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        marginLeft: 5,
    },
    enabledBtn: {
        backgroundColor: '#476DC5'
    },
    disabledBtn: {
        backgroundColor: '#89a9f4'
    }
});

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        fetching: state.chat.fetching,
        messages: state.chat.messages
    }
}

//make this component available to the app
export default connect(mapStateToProps, { sendMessage, fetchMessges })(Chat);
