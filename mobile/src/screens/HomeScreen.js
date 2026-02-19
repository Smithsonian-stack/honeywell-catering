import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Colors } from '../../shared/colors';
import { GoldButton, OutlinedButton } from '../components/Buttons';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070' }}
                style={styles.hero}
            >
                <View style={styles.overlay}>
                    <Text style={styles.heroTitle}>Luxury Catering for Corporate Excellence</Text>
                    <Text style={styles.heroSubtitle}>Professional culinary experiences tailored for your organization.</Text>
                    <View style={styles.buttonContainer}>
                        <GoldButton title="Book Catering" onPress={() => navigation.navigate('Booking')} style={styles.btn} />
                        <OutlinedButton title="View Menu" onPress={() => navigation.navigate('Menu')} style={styles.btn} />
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Services</Text>
                <Text style={styles.sectionText}>Honeywell Catering provides premium, well-executed catering services for corporations and high-end events.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    hero: { width: '100%', height: 500, justifyContent: 'center' },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heroTitle: {
        color: Colors.primary,
        fontSize: 32,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    heroSubtitle: {
        color: Colors.textLight,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 26,
        marginBottom: 30,
    },
    buttonContainer: { width: '100%', alignItems: 'center' },
    btn: { width: '80%', marginBottom: 15 },
    section: { padding: 30, alignItems: 'center' },
    sectionTitle: {
        color: Colors.primary,
        fontSize: 24,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    sectionText: {
        color: Colors.textLight,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
    },
});

export default HomeScreen;
