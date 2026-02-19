import React from 'react';
import { Colors } from '../../shared/colors';

const MenuManagement = () => {
    const menuItems = [
        { id: 1, name: 'Executive Lunch Box', category: 'Corporate', price: '$25.00', status: 'Active' },
        { id: 2, name: 'Signature Wedding Buffet', category: 'Wedding', price: '$85.00', status: 'Active' },
        { id: 3, name: 'Canapés Selection', category: 'Events', price: '$45.00', status: 'Inactive' },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={{ color: Colors.primary }}>Menu Management</h2>
                <button style={styles.addBtn}>+ Add New Item</button>
            </div>

            <div style={styles.grid}>
                {menuItems.map(item => (
                    <div key={item.id} style={styles.card}>
                        <div style={styles.categoryBadge}>{item.category}</div>
                        <div style={styles.itemName}>{item.name}</div>
                        <div style={styles.itemPrice}>{item.price}</div>
                        <div style={styles.actions}>
                            <button style={styles.editBtn}>Edit</button>
                            <button style={styles.deleteBtn}>Toggle Status</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '40px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
    addBtn: {
        backgroundColor: Colors.primary,
        color: 'black',
        border: 'none',
        padding: '12px 24px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
    card: {
        backgroundColor: Colors.secondary,
        padding: '25px',
        border: `1px solid ${Colors.primary}22`,
        position: 'relative'
    },
    categoryBadge: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        color: Colors.primary,
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    itemName: { color: Colors.textLight, fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' },
    itemPrice: { color: Colors.primary, fontSize: '20px', marginBottom: '20px' },
    actions: { display: 'flex', gap: '10px' },
    editBtn: {
        backgroundColor: 'transparent',
        color: Colors.primary,
        border: `1px solid ${Colors.primary}`,
        flex: 1,
        padding: '8px',
        cursor: 'pointer'
    },
    deleteBtn: {
        backgroundColor: 'transparent',
        color: '#FF5252',
        border: '1px solid #FF5252',
        flex: 1,
        padding: '8px',
        cursor: 'pointer'
    }
};

export default MenuManagement;
