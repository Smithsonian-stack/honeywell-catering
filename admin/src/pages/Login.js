import React, { useState } from 'react';
import { Colors } from '../../shared/colors';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for Firebase Auth would go here
        onLogin(email);
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h1 style={styles.logo}>HONEYWELL</h1>
                <h2 style={styles.title}>Admin Portal</h2>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                        type="email"
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password</label>
                    <input
                        type="password"
                        style={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" style={styles.button}>Secure Login</button>
                <p style={styles.forgot}>Forgot password? Contact system administrator.</p>
            </form>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    form: {
        width: '100%',
        maxHeight: '500px',
        maxWidth: '400px',
        padding: '40px',
        backgroundColor: Colors.secondary,
        border: `1px solid ${Colors.primary}33`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: { color: Colors.primary, fontSize: '28px', letterSpacing: '4px', marginBottom: '10px' },
    title: { color: Colors.textLight, fontSize: '18px', fontWeight: '300', marginBottom: '40px' },
    inputGroup: { width: '100%', marginBottom: '20px' },
    label: { display: 'block', color: Colors.primary, fontSize: '12px', marginBottom: '8px', textTransform: 'uppercase' },
    input: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#111',
        border: `1px solid ${Colors.primary}22`,
        color: 'white',
        outline: 'none',
        boxSizing: 'border-box'
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: Colors.primary,
        color: 'black',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '20px'
    },
    forgot: { color: Colors.textLight, fontSize: '12px', marginTop: '20px', opacity: 0.5 }
};

export default Login;
