import { SafeAreaView, StyleSheet, Image, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {LoginStyle} from '../styles/Login'



const Login = () => {

    const navigation = useNavigation();

    // Función para redirigir a la pantalla de Registro
    const handleSignUpPress = () => {
        navigation.navigate('Registro');
    };

  return (
    <SafeAreaView style={LoginStyle.container}>

        {/* SECCION TITULO*/}

        <View style={LoginStyle.titleSection}>
            <Image
                source={
                    require('../images/Trevelo.jpg')
                }
                style={{width: "100%", height: "120%", resizeMode: "cover", opacity: 0.6 }}
            />
            <View 
            style={{
                position: "absolute"
            }}
            >
                <Text style={LoginStyle.tittle}> Trevelo </Text>
            </View>
        </View>

        {/*SECCIÓN FORMULARIO*/}

        <View style={LoginStyle.formSection}>

            <View>
                <View style={LoginStyle.spacing}>
                    <Text style={LoginStyle.label} >Email Address</Text>
                    <TextInput 
                        style={LoginStyle.textInput}
                        underlineColorAndroid={"transparent"}
                        placeholder="EmailAddress@example.com" 
                        keyboardType="email-address"
                        returnKeyType="next"
                    />  
                </View>


                <View style={LoginStyle.spacing}>
                    <Text style={LoginStyle.label} >Password</Text>
                    <TextInput 
                        style={LoginStyle.textInput}
                        underlineColorAndroid={"transparent"}
                        placeholder="*********" 
                        secureTextEntry={true}
                    />
                    <Text style={LoginStyle.forgotPassword} >Forgot Password</Text>  
                </View>

                <View style={LoginStyle.spacing}>
                    <TouchableOpacity style={LoginStyle.button}>
                            <Text style={LoginStyle.buttonText}>Login</Text>
                    </TouchableOpacity>
                 </View>
           </View>

           <View style={[LoginStyle.spacing, LoginStyle.row]}>
                <Text style={LoginStyle.label}>Don't have an account with Us?</Text>
                <TouchableOpacity onPress={handleSignUpPress}>
                    <Text style={LoginStyle.signUp}>Sing Up</Text>    
                </TouchableOpacity>  
            </View>  
        </View>

    </SafeAreaView>
  )
}

export default Login

