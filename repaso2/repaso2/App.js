import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Libros from './screens/libros';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Mostrar la pantalla de bienvenida durante 2 segundos exactos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido</Text>
        <Text style={styles.splashSubtext}>Registro de Libros</Text>
      </View>
    );
  }

  return <Libros />;
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#2b2d42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  splashSubtext: {
    fontSize: 20,
    color: '#8d99ae',
    fontStyle: 'italic',
  },
});
