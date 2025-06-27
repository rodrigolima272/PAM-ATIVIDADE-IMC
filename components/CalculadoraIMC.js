import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const CalculadoraIMC = ({ navigation }) => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      Alert.alert('Erro', 'Por favor, preencha peso e altura');
      return;
    }

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; // converter cm para m

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      Alert.alert('Erro', 'Por favor, insira valores numéricos válidos');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc.toFixed(2));

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc < 25) {
      setClassificacao('Peso normal');
    } else if (imc < 30) {
      setClassificacao('Sobrepeso');
    } else if (imc < 35) {
      setClassificacao('Obesidade Grau I');
    } else if (imc < 40) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ex: 70"
          value={peso}
          onChangeText={setPeso}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura (cm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ex: 175"
          value={altura}
          onChangeText={setAltura}
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      
      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC: {resultado}</Text>
          <Text style={styles.classificationText}>Classificação: {classificacao}</Text>
          
          <Image
            source={require('../assets/images/imc-chart.png')}
            style={styles.chartImage}
            resizeMode="contain"
          />
        </View>
      )}
      
      <TouchableOpacity 
        style={styles.profileButton} 
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.profileButtonText}>Ver Perfil</Text>
      </TouchableOpacity>
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
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  classificationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  chartImage: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  profileButton: {
    marginTop: 30,
    padding: 10,
  },
  profileButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default CalculadoraIMC;