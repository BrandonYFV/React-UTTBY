import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, SafeAreaView, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {RegisterStyle} from '../styles/Register'
import * as ImagePicker from 'expo-image-picker';

export default function Register() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }


    // Función para redirigir a la pantalla de Registro
    const handleSignUpPressLogin = () => {
        navigation.navigate('Login');
    };
  return (
    <SafeAreaView style={RegisterStyle.container}>

  <View style={RegisterStyle.formSection}>

      <View>



      <View style={RegisterStyle.spacing}>
        <Text style={RegisterStyle.signupTop}>Register for your new account</Text>
        <Text style={RegisterStyle.signupBottom}></Text>    
          
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Selecciona tu foto de perfil" onPress={pickImage} />
      {image && <Image style={RegisterStyle.profilePic} source={{ uri: image }}  />}
    </View>
      
      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Username</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="Your Username" 
              returnKeyType="next"
          />  
      </View>

      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Email Address</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="EmailAddress@example.com" 
              keyboardType="email-address"
              returnKeyType="next"
          />  
      </View>


      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Password</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="*********" 
              secureTextEntry={true}
          />
      </View>

      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Confirm Password</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="*********" 
              secureTextEntry={true}
          />
      </View>

      <View style={RegisterStyle.spacing}>
          <TouchableOpacity style={RegisterStyle.button}>
                  <Text style={RegisterStyle.buttonText}>Register</Text>
          </TouchableOpacity>
      </View>

    </View>

  <View style={[RegisterStyle.spacing, RegisterStyle.row]}>
    <Text style={RegisterStyle.label}>Already have an account?</Text>
    <TouchableOpacity onPress={handleSignUpPressLogin}>
        <Text style={RegisterStyle.login}>Login</Text>
    </TouchableOpacity>
  </View>

  

  </View>

    </SafeAreaView>

  );
}

