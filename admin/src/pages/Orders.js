import React from 'react';
import { Colors } from '../../shared/colors';

const Orders = () => {
    const orders = [
        { id: '#ORD-7321', customer: 'TechCorp Inc.', date: '2026-02-19', status: 'Pending', amount: '$450.00' },
        { id: '#ORD-7322', customer: 'Sarah Johnson', date: '2026-02-18', status: 'Confirmed', amount: '$1,200.00' },
        { id: '#ORD-7323', customer: 'Global Logistics', date: '2026-02-18', status: 'Delivered', amount: '$850.00' },
    ];

    return (
        <div style={styles.container}>
            <h2 style={{ color: Colors.primary, marginBottom: '30px' }}>Order Management</h2>

            <div style={styles.filterBar}>
                <button style={styles.filterBtn}>All Orders</button>
                <button style={styles.filterBtnInactive}>Pending</button>
                <button style={styles.filterBtnInactive}>Confirmed</button>
                <button style={styles.filterBtnInactive}>Delivered</button>
            </div>

            <div style={styles.tableCard}>
                <table style={styles.table}>
                    <thead>
                        <tr style={styles.headerRow}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} style={styles.row}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.date}</td>
                                <td><span style={getStatusStyle(order.status)}>{order.status}</span></td>
                                <td>{order.amount}</td>
                                <td>
                                    <button style={styles.actionBtn}>View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const getStatusStyle = (status) => {
    const base = {
        padding: '4px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 'bold'
    };
    switch (status) {
        case 'Pending': return { ...base, backgroundColor: Colors.primary + '33', color: Colors.primary };
        case 'Confirmed': return { ...base, backgroundColor: '#4CAF5033', color: '#4CAF50' };
        default: return { ...base, backgroundColor: '#9E9E9E33', color: '#9E9E9E' };
    }
};

const styles = {
    container: { padding: '40px' },
    filterBar: { display: 'flex', gap: '15px', marginBottom: '30px' },
    filterBtn: {
        backgroundColor: Colors.primary,
        color: 'black',
        border: 'none',
        padding: '8px 20px',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    filterBtnInactive: {
        backgroundColor: 'transparent',
        color: Colors.textLight,
        border: `1px solid ${Colors.primary}44`,
        padding: '8px 20px',
        cursor: 'pointer'
    },
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

export default Orders;
