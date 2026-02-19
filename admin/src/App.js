import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Orders from './pages/Orders';
import MenuManagement from './pages/MenuManagement';
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import { Colors } from '../../shared/colors';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const [user, setUser] = useState(null);

    if (!user) {
        return <Login onLogin={(u) => setUser(u)} />;
    }

    return (
        <Router>
            <div className="admin-container" style={{ display: 'flex', backgroundColor: '#121212', minHeight: '100vh' }}>
                <Sidebar />
                <main style={styles.main}>
                    <Routes>
                        <Route path="/" element={<DashboardContent />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/menu" element={<MenuManagement />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

const DashboardContent = () => (
    <>
        <header style={styles.header}>
            <h2 style={{ color: Colors.primary }}>Dashboard Overview</h2>
            <div style={styles.userProfile}>
                <span style={{ color: Colors.textLight }}>Admin User</span>
                <div style={styles.avatar}>A</div>
            </div>
        </header>

        <section style={styles.statsGrid}>
            <StatCard title="Total Orders" value="128" icon="📈" />
            <StatCard title="Revenue" value="$12,450" icon="💰" />
            <StatCard title="Active Menus" value="12" icon="🍴" />
            <StatCard title="Customers" value="45" icon="👥" />
        </section>

        <section style={styles.recentOrders}>
            <h3 style={{ color: Colors.primary, marginBottom: '20px' }}>Recent Orders</h3>
            <table style={styles.table}>
                <thead>
                    <tr style={{ textAlign: 'left', borderBottom: `1px solid ${Colors.primary}33` }}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD-7321</td>
                        <td>TechCorp Inc.</td>
                        <td><span style={styles.badge}>Pending</span></td>
                        <td>$450.00</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </>
);

const StatCard = ({ title, value, icon }) => (
    <div style={styles.statCard}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>{icon}</div>
        <div style={{ color: Colors.textLight, fontSize: '14px' }}>{title}</div>
        <div style={{ color: Colors.primary, fontSize: '24px', fontWeight: 'bold' }}>{value}</div>
    </div>
);

const styles = {
    main: { marginLeft: '260px', padding: '40px', flex: 1 },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
    userProfile: { display: 'flex', alignItems: 'center' },
    avatar: {
        width: '40px',
        height: '40px',
        backgroundColor: Colors.primary,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '15px',
        color: 'black',
        fontWeight: 'bold',
    },
    statsGrid: {
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px'
    },
    statCard: {
        backgroundColor: Colors.secondary, padding: '20px', borderRadius: '4px', border: `1px solid ${Colors.primary}22`
    },
    recentOrders: {
        backgroundColor: Colors.secondary, padding: '30px', borderRadius: '4px', border: `1px solid ${Colors.primary}22`
    },
    table: { width: '100%', borderCollapse: 'collapse', color: Colors.textLight },
    badge: {
        backgroundColor: `${Colors.primary}33`, color: Colors.primary, padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
    },
};

export default App;
