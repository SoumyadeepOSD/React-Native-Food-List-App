import React from "react";
import { View, StyleSheet, Text, Button, Alert, Image, TouchableOpacity } from "react-native";
import {golu} from "./ImageLayout.js";
const MyButton = ()=>{
    return (<View>
        <Text style={StyleS.boru}>Follow button</Text>
        <Button
            style={StyleS.boru1}
            title="Call me"
            onPress={()=>{
                Alert.alert("")
            }}
        />

        <TouchableOpacity
            onPress={()=>{
                console.log("Suck it!")
            }}>
            <Text>Hello</Text>
            <Image style={golu}source={{ uri: "https://wonderfulengineering.com/wp-content/uploads/2014/05/train-pictures-39.jpg"}}/>
            </TouchableOpacity>
    </View>);
};

const StyleS = StyleSheet.create({
    boru:{
        textAlign:"center",
        color: "red",
        marginVertical: 100,
    },
    boru1:{
        borderRadius: 45,
    }
});

export default MyButton;