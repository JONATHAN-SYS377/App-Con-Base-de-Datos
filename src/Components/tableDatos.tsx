import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { styles } from '../theme/appestilos';


export const Table = () => {
    const data = [
        { id: 1, nombre: 'John Doe', edad: 25, email: 'john@example.com' },
        { id: 2, nombre: 'Jane Smith', edad: 30, email: 'jane@example.com' },
        // Agrega más datos aquí...
      ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.headerText}>Nombre</Text>
        <Text style={styles.headerText}>Edad</Text>
        <Text style={styles.headerText}>Email</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.nombre}</Text>
            <Text style={styles.cell}>{item.edad}</Text>
            <Text style={styles.cell}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};



export default Table;
