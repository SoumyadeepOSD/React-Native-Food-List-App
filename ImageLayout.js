import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImageFile = ()=>{
    return(<View>
        <Image
          source={{
            uri: 'https://wonderfulengineering.com/wp-content/uploads/2014/05/train-pictures-39.jpg',
          }}
          style={style.golu2}
        />
    </View>);
};

const style = StyleSheet.create({
    golu:{
        height:12,
        width: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    golu2:{
        height: 500,
        width: 500,
        alignSelf: "center",
        justifyContent: "center",
    }
})

export default ImageFile;