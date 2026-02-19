import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../shared/colors';

const ServiceCardComponent = ({ title, description, imageSource }) => (
    <View style={styles.card}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.divider} />
        </View>
    </View>
);

export const ServiceCard = memo(ServiceCardComponent);

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.surface,
        padding: 20,
        marginVertical: 10,
        borderLeftWidth: 3,
        borderLeftColor: Colors.primary,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
    title: {
        color: Colors.primary,
        fontSize: 20,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        color: Colors.textLight,
        fontSize: 14,
        lineHeight: 20,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.primary,
        width: 40,
        marginTop: 10,
    },
});
