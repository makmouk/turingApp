import {
    LOGIN_ATTEMP,
    LOGIN_SUCCESS
} from './types';
import firebase from '../firebase';
import { AsyncStorage } from 'react-native';


export const login = ({ username }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMP });
        firebase.auth().signInAnonymously()
            .then(resp => loginUserSuccess(dispatch, resp, username))
    }
}
const loginUserSuccess = (dispatch, resp, username) => {
    console.log(resp);
    const userId = resp.user.uid;
    const user = {
        id: userId,
        username,
    };
    //Save Profile
    firebase.database().ref(`users/${userId}`)
        .set({ username })
        .then(() => finishLogin(dispatch, user));
}

const finishLogin = (dispatch, user) => {
    console.log("finish")
    AsyncStorage.setItem('user_info', JSON.stringify(user))
        .then(() => {
            dispatch({ type: LOGIN_SUCCESS, payload: user });
        });
}

export const loggedIn = (user) => {
    return ({ type: LOGIN_SUCCESS, payload: user });
}