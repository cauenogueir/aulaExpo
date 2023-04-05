import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoProps = ({ label, corFundo, msg}) => {

    const botaoStyle = {
        backgroundColor: corFundo,
        padding: 12,
        borderRadius: 5,
        width: 57,
        margin: 'auto',
    };

    const handlePress = () => {

        console.log(msg)
    };

    return (
        <TouchableOpacity onPress={handlePress} style={botaoStyle}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
}

export default BotaoProps;