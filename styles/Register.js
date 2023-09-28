import {  StyleSheet } from 'react-native';

export const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
      },
      formSection:{
        flex:1,
        backgroundColor:"white", 
        width: "100%",
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        padding:20,
        justifyContent: "space-between"
      },
      label:{
        color: "#444444"
      },
      textInput:{
        color: "#000",
        padding: 8,
        borderBottomWidth: 1.5, 
        borderColor: "#62f1f8", 
      },
      spacing:{
        marginTop:30,
      },
      button:{
        backgroundColor: "#62f1f8",
        padding: 15,
        borderRadius:30,
        alignItems: "center",
        textAlign: "center",
      },
      buttonText:{
        fontSize:20,
        color: "black",
        fontWeight: "bold",
      },
      row:{
        flexDirection:"row",
        justifyContent:"center",
    
      },
    
    login:{
        color: "#62f1f8",
        paddingLeft:5,
      },
      signupTop: {
        fontSize:30,
        color: "#000",
        textAlign: "center",
      },
    
      signupBottom: {
        fontSize:30,
          color: "#000",
          textAlign: "left",
      },
      subTittle:{
        fontSize : 12 ,
        color: "#ccc"
      }
})