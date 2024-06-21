import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CustomToast = ({ message, visible, onRequestClose, message_type }) => {
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        setIsVisible(visible);

        const timer = setTimeout(() => {
            setIsVisible(false);
            onRequestClose();
        }, 3000); // Toast duration in milliseconds

        return () => clearTimeout(timer);
    }, [visible, onRequestClose]);

    const getBackgroundColor = () => {
        console.log(message_type)
        return message_type === 'success' ? 'green' : 'red';
    };

    const getTextColor = () => {
        return message_type === 'success' ? 'white' : 'white';
    };

    return (
        <>
            {isVisible && (
                <View style={[styles.toastContainer, { backgroundColor: getBackgroundColor() }]}>
                    <Text style={[styles.toastText, { color: getTextColor() }]}>{message}</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 16,
        position: 'absolute',
       
        width:'90%',
        
        alignSelf: 'center',
    },
    toastText: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
    },
});


