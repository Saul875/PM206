import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    FlatList,
    Alert,
    ActivityIndicator,
    ImageBackground,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

export default function Libros() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [loading, setLoading] = useState(false);
    const [libros, setLibros] = useState([]);

    const agregarLibro = () => {
        // Validar que todos los campos estén llenos
        if (!titulo.trim() || !autor.trim() || !genero.trim()) {
            Alert.alert('Error', 'Todos los campos son obligatorios.');
            return;
        }

        setLoading(true);

        // Simular espera antes de guardar (4 segundos)
        setTimeout(() => {
            const nuevoLibro = {
                id: Date.now().toString(),
                titulo: titulo.trim(),
                autor: autor.trim(),
                genero: genero.trim(),
            };

            // Agregar libro a la lista
            setLibros((prev) => [nuevoLibro, ...prev]);

            // Limpiar TextInputs
            setTitulo('');
            setAutor('');
            setGenero('');

            setLoading(false);

            // Notificar con Alert
            Alert.alert('Éxito', 'El libro ha sido guardado exitosamente.');
        }, 4000);
    };

    const renderItem = ({ item }) => (
        <View style={styles.libroCard}>
            <Text style={styles.libroTitulo}>{item.titulo}</Text>
            <Text style={styles.libroAutor}>Autor: {item.autor}</Text>
            <Text style={styles.libroGenero}>Género: {item.genero}</Text>
        </View>
    );

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }}
            style={styles.background}
        >
            <View style={styles.overlay} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <Text style={styles.title}>Mis Libros Favoritos</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Título del libro"
                        placeholderTextColor="#888"
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Autor"
                        placeholderTextColor="#888"
                        value={autor}
                        onChangeText={setAutor}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Género"
                        placeholderTextColor="#888"
                        value={genero}
                        onChangeText={setGenero}
                    />

                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            pressed && styles.buttonPressed,
                            loading && styles.buttonDisabled
                        ]}
                        onPress={agregarLibro}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#ffffff" size="small" />
                        ) : (
                            <Text style={styles.buttonText}>Agregar Libro</Text>
                        )}
                    </Pressable>
                </View>

                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No has registrado ningún libro aún.</Text>
                    }
                />
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    form: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#e9ecef',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#212529',
    },
    button: {
        backgroundColor: '#ef233c',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
    },
    buttonPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    buttonDisabled: {
        backgroundColor: '#f78a98',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    listContainer: {
        paddingBottom: 30,
    },
    libroCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 18,
        borderRadius: 12,
        marginBottom: 12,
        borderLeftWidth: 5,
        borderLeftColor: '#ef233c',
    },
    libroTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2b2d42',
        marginBottom: 5,
    },
    libroAutor: {
        fontSize: 15,
        color: '#4a4e69',
        marginBottom: 3,
    },
    libroGenero: {
        fontSize: 14,
        color: '#8d99ae',
        fontStyle: 'italic',
    },
    emptyText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        fontStyle: 'italic',
    }
});
