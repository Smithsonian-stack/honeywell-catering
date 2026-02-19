import React from 'react';
import { Colors } from '../../shared/colors';

const Customers = () => {
    const customers = [
        { id: 1, name: 'TechCorp Inc.', email: 'contact@techcorp.com', totalOrders: 15, totalSpent: '$4,250.00' },
        { id: 2, name: 'Sarah Johnson', email: 'sarah.j@gmail.com', totalOrders: 3, totalSpent: '$1,800.00' },
        { id: 3, name: 'Global Logistics', email: 'info@globallog.net', totalOrders: 8, totalSpent: '$2,450.00' },
    ];

    return (
        <div style={styles.container}>
            <h2 style={{ color: Colors.primary, marginBottom: '30px' }}>Customer Management</h2>
            <div style={styles.tableCard}>
                <table style={styles.table}>
                    <thead>
                        <tr style={styles.headerRow}>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Total Orders</th>
                            <th>Total Spent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr key={customer.id} style={styles.row}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.totalOrders}</td>
                                <td>{customer.totalSpent}</td>
                                <td>
                                    <button style={styles.actionBtn}>View History</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '40px' },
    tableCard: {
        backgroundColor: Colors.secondary,
        padding: '20px',
        borderRadius: '4px',
        border: `1px solid ${Colors.primary}22`
    },
    table: { width: '100%', borderCollapse: 'collapse', color: Colors.textLight },
    headerRow: { textAlign: 'left', borderBottom: `1px solid ${Colors.primary}33` },
    row: { borderBottom: `1px solid ${Colors.primary}11` },
    actionBtn: {
        backgroundColor: 'transparent',
        color: Colors.primary,
        border: `1px solid ${Colors.primary}`,
        padding: '5px 10px',
        fontSize: '12px',
        cursor: 'pointer'
    }
};

export default Customers;
