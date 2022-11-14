// import libraries to create components
import React from "react";
import {Text, StyleSheet, View} from "react-native";


//create a component that returns jsx or normal function
const X = () =>{
  return <Text style={styles.textStyle}>hello world!</Text>;  
};


//create a stylesheet to style the components
const styles = StyleSheet.create({
  textStyle: {
    color:"red",
    fontSize: 50,
    textAlign: "center",
    marginTop: 50
  },
});


//export the file, so that we can use it anywhere in the whole app
export default X;