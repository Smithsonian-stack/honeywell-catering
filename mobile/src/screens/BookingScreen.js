import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { Colors } from '../../shared/colors';
import { GoldButton } from '../components/Buttons';

const BookingScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        guests: '',
        message: ''
    });

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    const handleBooking = () => {
        const { name, email, date, guests } = formData;

        if (!name || !email || !date || !guests) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            Alert.alert('Error', 'Please use the format YYYY-MM-DD for the date.');
            return;
        }

        Alert.alert('Success', 'Your booking inquiry has been sent.');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.title}>Book Your Event</Text>
            <Text style={styles.subtitle}>Elevate your corporate experience with Honeywell Catering.</Text>

            <View style={styles.form}>
                <Input label="Full Name" value={formData.name} onChange={(val) => setFormData({ ...formData, name: val })} />
                <Input label="Email Address" value={formData.email} onChange={(val) => setFormData({ ...formData, email: val })} keyboardType="email-address" />
                <Input label="Event Date" value={formData.date} onChange={(val) => setFormData({ ...formData, date: val })} placeholder="YYYY-MM-DD" />
                <Input label="Number of Guests" value={formData.guests} onChange={(val) => setFormData({ ...formData, guests: val })} keyboardType="numeric" />
                <Input label="Additional Message" value={formData.message} onChange={(val) => setFormData({ ...formData, message: val })} multiline numberOfLines={4} />

                <GoldButton title="Submit Inquiry" onPress={handleBooking} style={styles.submitBtn} />
            </View>
        </ScrollView>
    );
};

const Input = ({ label, ...props }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholderTextColor="#666"
            {...props}
        />
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    content: { padding: 30 },
    title: {
        color: Colors.primary,
        fontSize: 28,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: Colors.textLight,
        fontSize: 14,
        marginBottom: 30,
        lineHeight: 20,
    },
    form: { width: '100%' },
    inputContainer: { marginBottom: 20 },
    label: {
        color: Colors.primary,
        fontSize: 12,
        textTransform: 'uppercase',
        marginBottom: 8,
        letterSpacing: 1,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary + '66',
        color: Colors.textLight,
        paddingVertical: 10,
        fontSize: 16,
    },
    submitBtn: { marginTop: 20 },
});

export default BookingScreen;
