// import libraries to create components
import React from "react";
import {Text, ScrollView} from "react-native";
import Imagecomponents from "./src/screens/ImageComponents.js";
//create a component that returns jsx or normal function
const App = () =>{
  return (
    <ScrollView>
      <Text style={{color:"green", fontSize:30, marginVertical: 20, textAlign:"center"}}>2022 Food Items</Text>
      <Imagecomponents
        text="Chicken Biriyani"
        image={"https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80"}
        price='₹120'
      />

<Imagecomponents
        text="Moglai Paratha"
        image={"https://media.istockphoto.com/id/1341848263/photo/malai-kofta.jpg?s=612x612&w=is&k=20&c=YXSi-SIva5KEQeZxSIJ0Kj-yvcAznwBrCl2wBXGxutY="}
        price='₹70'
      />

<Imagecomponents
        text="Fish Kabiraji"
        image={"https://images.unsplash.com/photo-1523457345928-9e51f4d5ba94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
        price='₹80'
      />

<Imagecomponents
        text="Malai Kofta"
        image={"https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"}
        price='₹50'
      />

<Imagecomponents
        text="Kochuri-Dal"
        image={"https://images.unsplash.com/photo-1591465619339-60fce055bc82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        price='₹20'
      />

<Imagecomponents
        text="Mutton Kosha"
        image={"https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
        price='₹250'
      />

<Imagecomponents
        text="Butter Paneer Masala"
        image={"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        price='₹170'
      />

<Imagecomponents
        text="Plain Masal Dosa"
        image={"https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80"}
        price='₹60'
      />

<Imagecomponents
        text="Chicken Lollipop"
        image={"https://media.istockphoto.com/id/1132083477/photo/marinated-chicken-legs.jpg?s=612x612&w=is&k=20&c=7982OQpOVc7wocoQaiVJE20Ck6NdYMHt4JxDxQ-SIiI="}
        price='₹30'
      />

<Imagecomponents
        text="Mutton Korma"
        image={"https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=612x612&w=is&k=20&c=PbzZNwhF1DXmQI2UE6yJ-CiLiD3jM6bq7eI4YzUwfFg="}
        price='₹230'
      />

<Imagecomponents
        text="Dahi Bada"
        image={"https://media.istockphoto.com/id/1310046347/photo/super-soft-dahi-bhalla-or-dahi-vada-served-in-a-black-bowl.jpg?s=612x612&w=is&k=20&c=vxKpPiKjuVzKfFkZgDQZPyf4ez1qRwSX5oLxuFbkciI="}
        price='₹70'
      />

<Imagecomponents
        text="Pizza"
        image={"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        price='₹180'
      />

<Imagecomponents
        text="Burger"
        image={"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"}
        price='₹120'
      />

<Imagecomponents
        text="French Fries"
        image={"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        price='₹80'
      />

<Imagecomponents
        text="Starbucks Coffee"
        image={"https://images.unsplash.com/photo-1615679953957-340c5cb38bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
        price='₹320'
      />
    </ScrollView>);  
};

//create a stylesheet to style the components
//export the file, so that we can use it anywhere in the whole app
export default App;