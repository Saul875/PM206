/Zona1: Importaciones de componentes y archivos/
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

/*Zona2: Main - Hogar de los componentes */
export default function SafeAreaScreen() {
  return (
    <SafeAreaView style={styles.fondo}>
      <Text style={styles.titulo}>SafeAreaScreen y ScrollView</Text>
      <Text style={styles.description}>SafeAreaView evita que el contenedor se tape con el notch del celular</Text>

      <Text style={styles.description}>
        ScrollView permite hacer scroll cuando hay mucho contenido
      </Text>

      <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.contenidoLista}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
      >
        <View style={[styles.tarjeta, { backgroundColor: 'red' }]}>
          <Text style={styles.textoTarjeta}>Elemento 1</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: 'blue' }]}>
          <Text style={styles.textoTarjeta}>Elemento 2</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: 'orange' }]}>
          <Text style={styles.textoTarjeta}>Elemento 3</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: 'green' }]}>
          <Text style={styles.textoTarjeta}>Elemento 4</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: 'white' }]}>
          <Text style={styles.textoTarjeta}>Elemento 5</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: 'purple' }]}>
          <Text style={styles.textoTarjeta}>Elemento 6</Text>
        </View>
        <View style={[styles.tarjeta, { backgroundColor: '#60a082ff' }]}>
          <Text style={styles.textoTarjeta}>Elemento 7</Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

/Zona3: Estilos y posicionamiento/
const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#eef4ff',
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 20,
    paddingHorizontal: 18,
  },
  titulo: {
    color: '#183153',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    color: '#52657a',
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    maxWidth: 500,
    marginBottom: 16,
  },
  lista: {
    flex: 1,
    width: '100%',
    maxWidth: 500,
    borderRadius: 16,
    backgroundColor: '#dfe9f8',
  },
  contenidoLista: {
    padding: 12,
    paddingBottom: 24,
  },
  tarjeta: {
    minHeight: 180,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff99',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  textoTarjeta: {
    color: '#183153',
    backgroundColor: '#ffffffdd',
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
  },
});