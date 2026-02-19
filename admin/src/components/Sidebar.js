import React from 'react';
import { Colors } from '../../shared/colors';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: '📊', path: '/' },
        { name: 'Orders', icon: '📝', path: '/orders' },
        { name: 'Menu Management', icon: '🍴', path: '/menu' },
        { name: 'Customers', icon: '👥', path: '/customers' },
        { name: 'Analytics', icon: '📈', path: '/analytics' },
        { name: 'Settings', icon: '⚙️', path: '/settings' },
    ];

    return (
        <div style={styles.sidebar}>
            <div style={styles.logo}>HONEYWELL</div>
            <nav style={styles.nav}>
                {menuItems.map((item) => (
                    <Link to={item.path} key={item.name} style={{ textDecoration: 'none' }}>
                        <div style={styles.menuItem} className="menu-item-hover">
                            <span style={styles.icon}>{item.icon}</span>
                            <span>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

const styles = {
    sidebar: {
        width: '260px',
        height: '100vh',
        backgroundColor: Colors.secondary,
        color: Colors.textLight,
        display: 'flex',
        flexDirection: 'column',
        borderRight: `1px solid ${Colors.primary}33`,
        position: 'fixed',
        left: 0,
        top: 0,
    },
    logo: {
        padding: '30px 20px',
        fontSize: '22px',
        fontWeight: 'bold',
        color: Colors.primary,
        letterSpacing: '2px',
        borderBottom: `1px solid ${Colors.primary}22`,
    },
    nav: {
        padding: '20px 0',
    },
    menuItem: {
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '14px',
        letterSpacing: '0.5px',
    },
    icon: {
        marginRight: '15px',
        fontSize: '18px',
    },
};

export default Sidebar;
