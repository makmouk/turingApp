/* eslint-disable arrow-body-style */
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWiidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000', //ios
        shadowOffset: { width: 0, height: 2 }, //ios
        shadowOpacity: 0.1, //ios
        shadowRadius: 2,
        elevation: 1
    }
};

export default Card;
