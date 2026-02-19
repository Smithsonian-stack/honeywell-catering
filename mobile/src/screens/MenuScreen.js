import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Colors } from '../../shared/colors';
import { ServiceCard } from '../components/ServiceCard';

const MenuScreen = () => {
    const menuCategories = [
        { id: '1', title: 'Corporate Catering', description: 'Executive lunches and meetings.' },
        { id: '2', title: 'Weddings', description: 'Luxury wedding buffet and service.' },
        { id: '3', title: 'Private Chef', description: 'Exclusive home dining experiences.' },
        { id: '4', title: 'Event Management', description: 'Full event coordination and service.' },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={menuCategories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ServiceCard
                        title={item.title}
                        description={item.description}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    list: { padding: 20 },
});

export default MenuScreen;
