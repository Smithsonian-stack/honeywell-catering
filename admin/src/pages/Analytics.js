import React from 'react';
import { Colors } from '../../shared/colors';

const Analytics = () => {
    return (
        <div style={styles.container}>
            <h2 style={{ color: Colors.primary, marginBottom: '30px' }}>Business Analytics</h2>

            <div style={styles.grid}>
                <div style={styles.chartPlaceholder}>
                    <div style={styles.chartTitle}>Revenue Growth (Last 30 Days)</div>
                    <div style={styles.barContainer}>
                        {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} style={{ ...styles.bar, height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>

                <div style={styles.chartPlaceholder}>
                    <div style={styles.chartTitle}>Top Catering Categories</div>
                    <div style={styles.pieContainer}>
                        <div style={{ ...styles.pieSection, backgroundColor: Colors.primary, width: '60%' }}>Corporate</div>
                        <div style={{ ...styles.pieSection, backgroundColor: '#444', width: '25%' }}>Weddings</div>
                        <div style={{ ...styles.pieSection, backgroundColor: '#222', width: '15%' }}>Private</div>
                    </div>
                </div>
            </div>

            <div style={styles.insights}>
                <h3 style={{ color: Colors.primary, marginBottom: '15px' }}>Key Insights</h3>
                <p style={{ color: Colors.textLight }}>• Corporate catering revenue increased by 15% this month.</p>
                <p style={{ color: Colors.textLight }}>• Peak booking hours are Monday mornings for the following week.</p>
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '40px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' },
    chartPlaceholder: {
        backgroundColor: Colors.secondary,
        padding: '30px',
        borderRadius: '4px',
        border: `1px solid ${Colors.primary}22`,
        height: '300px',
        display: 'flex',
        flexDirection: 'column'
    },
    chartTitle: { color: Colors.primary, fontSize: '16px', marginBottom: '20px', fontWeight: 'bold' },
    barContainer: { flex: 1, display: 'flex', alignItems: 'flex-end', gap: '10px' },
    bar: { flex: 1, backgroundColor: Colors.primary, opacity: 0.8 },
    pieContainer: { flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' },
    pieSection: { padding: '10px', color: 'white', fontSize: '12px', textAlign: 'center', borderRadius: '4px' },
    insights: { padding: '20px', backgroundColor: Colors.secondary, borderRadius: '4px' }
};

export default Analytics;
