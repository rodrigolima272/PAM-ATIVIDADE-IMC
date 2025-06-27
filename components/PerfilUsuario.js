import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PerfilUsuario = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à sua galeria para selecionar uma foto.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      
      <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarPlaceholderText}>+</Text>
          </View>
        )}
      </TouchableOpacity>
      
      <Text style={styles.uploadText}>Toque para alterar a foto</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Nome:</Text>
        <Text style={styles.infoValue}>Usuário</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>E-mail:</Text>
        <Text style={styles.infoValue}>usuario@exemplo.com</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Data de Nascimento:</Text>
        <Text style={styles.infoValue}>01/01/1990</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 30,
    marginTop: 20,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  avatarPlaceholderText: {
    fontSize: 40,
    color: '#4CAF50',
  },
  uploadText: {
    color: '#666',
    marginBottom: 30,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
});

export default PerfilUsuario;