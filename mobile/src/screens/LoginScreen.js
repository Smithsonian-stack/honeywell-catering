import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { Colors } from '../../shared/colors';
import { GoldButton } from '../components/Buttons';

const LoginScreen = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070' }}
            style={styles.container}
        >
            <View style={styles.overlay}>
                <Text style={styles.logo}>HONEYWELL</Text>
                <Text style={styles.subtitle}>ELEVATED CATERING</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#888"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <GoldButton title="Sign In" onPress={() => onLogin(email)} style={styles.btn} />
                </View>
                <Text style={styles.footer}>Member exclusive services.</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center', padding: 40 },
    logo: { color: Colors.primary, fontSize: 36, fontWeight: 'bold', fontFamily: 'Times New Roman', letterSpacing: 5 },
    subtitle: { color: Colors.textLight, fontSize: 12, letterSpacing: 3, marginBottom: 50 },
    form: { width: '100%' },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary + '66',
        color: 'white',
        paddingVertical: 15,
        marginBottom: 20,
        fontSize: 16
    },
    btn: { marginTop: 20 },
    footer: { color: Colors.textLight, opacity: 0.5, marginTop: 40, fontSize: 12 }
});

export default LoginScreen;
