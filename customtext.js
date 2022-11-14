import React from "react";
import {FlatList, StyleSheet, Text, View, YellowBox, Image} from "react-native";

const APP1 = () =>{
    const array = [
        {
            "name": "Kaushik",
            "roll": "89067",
            "dept": "AIML",
            "skill": "js",

            "image": "https://images.unsplash.com/photo-1668196736086-85663e170ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },

        {
            "name": "Debraj",
            "roll": "57061",
            "dept": "CSE",
            "skill": "React-js",
            
            "image": "https://images.unsplash.com/photo-1668067516409-f3bb960ab4a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },

        {
            "name": "Raja",
            "roll": "99567",
            "dept": "CSBS",
            "skill": "React-native",
            
            "image": "https://images.unsplash.com/photo-1668099704606-6704bb3abe64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        
        {
            "name": "Sanjib",
            "roll": "13467",
            "dept": "CSE",
            "skill": "Python",
            
            "image": "https://images.unsplash.com/photo-1659535888426-de961c4ea887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        
        {
            "name": "Rajib",
            "roll": "72347",
            "dept": "Data-Science",
            "skill": "JAVA",
            
            "image": "https://plus.unsplash.com/premium_photo-1664647841144-2fb46d9aea92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        
        {
            "name": "Tanmay",
            "roll": "63567",
            "dept": "AIML",
            "skill": "C++",
            
            "image": "https://images.unsplash.com/photo-1668242372382-9e6282c63578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
    ];

//     style = {styles.st3}
// style = {styles.st3}
// style = {styles.st3}
// style = {styles.st3}
// style = {styles.st2}
    return (
        <View>
        <FlatList style={STYLES.st_whole_area}
            horizontal
            data={array}
            renderItem={({ item }) => {
            
                return <View>
                <View style={STYLES.card_design}>
                    <Text style={STYLES.st_text}>Name: {item.name}</Text>
                    <Text style={STYLES.st_text}>Roll: {item.roll}</Text>
                    <Text style={STYLES.st_text}>Department: {item.dept}</Text>
                    <Text style={STYLES.st_text}>Skills: {item.skill}</Text>
                </View>
                </View> 
            }}
            /><Text style={STYLES.bottom_of_card}></Text></View>);};


const STYLES = StyleSheet.create({
    st_whole_area : {
        backgroundColor: 'black',
        paddingBottom: 50,
        borderWidth: 0,
        borderColor: "yellow",
    },

    st_text: {
        textAlign: "center",
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
    },

    card_design: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
        marginBottom: 12,
        paddingLeft: 62,
        paddingRight: 62,
        borderRadius: 30,
        marginTop: 52,
        marginLeft: 10,
        marginRight: 20,
        elevation: 5,
        borderColor: 'red',
        borderWidth: 2,
        
    },

    bottom_of_card: {
        backgroundColor: "red",
    }

});

export default APP1;