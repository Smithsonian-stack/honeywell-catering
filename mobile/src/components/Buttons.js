import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/colors';

const GoldButtonComponent = ({ title, onPress, style, textStyle }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

const OutlinedButtonComponent = ({ title, onPress, style, textStyle }) => (
    <TouchableOpacity style={[styles.outlined, style]} onPress={onPress}>
        <Text style={[styles.outlinedText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

export const GoldButton = memo(GoldButtonComponent);
export const OutlinedButton = memo(OutlinedButtonComponent);

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Times New Roman',
    },
    outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    outlinedText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Times New Roman',
    },
});
