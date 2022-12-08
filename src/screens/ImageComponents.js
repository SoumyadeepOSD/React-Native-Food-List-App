import React from "react";
import { Text, View, Image, StyleSheet, Button, ToastAndroid } from "react-native";

const Imagecomponents = ({ text, image, price})=>{

    return(<View style={STYLES.text_style_group}>
        <Image style={STYLES.image_style}
            source={{uri: image}}
        />
        <View style={STYLES.text_style_group1}>
        <Text style={STYLES.text_style}>{text}</Text>
        <Text style={{fontSize:20, paddingLeft:30, color:"red"}}>{price}</Text>
        </View>
        <Button
            style={{marginBottom: 12}}
            title="Order Now"
            onPress={()=>{
                    ToastAndroid.showWithGravity(
                      `You booked ${text}`,
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM
                    );
                    this.FunctionToOpenSecondActivity
            }}
        />
        <View style={{marginBottom:12,}}></View>
        <Text style={{width:990, height:1, backgroundColor:"black"}}/>
        </View>);
};

const STYLES = StyleSheet.create({
    text_style:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign:"left",
        marginBottom: 42,
    },

    image_style:{
        height: 200,
        width: 290,
        elevation: 2,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20
    },

    text_style_group:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    text_style_group1:{
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-evenly",
    },
});

export default Imagecomponents;
