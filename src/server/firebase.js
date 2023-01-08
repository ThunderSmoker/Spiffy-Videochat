import firebase from "firebase/app";
import database from "firebase/database";

//To initialize the firebase app we need to pass the configuration object.

var firebaseConfig ={
    apiKey: 'AIzaSyBXD3XqKNKsqF6sOe6pLytTBfbcXBJaDXM' ,  //apiKey 
    databaseURL:'https://meet-clone-38176-default-rtdb.asia-southeast1.firebasedatabase.app' //<= url of database needed/....
};

firebase.initializeApp(firebaseConfig);
export const db = firebase;
var firepadRef =firebase.database().ref(); //thid will give the address to our entire database

export const userName = prompt("Write your Spiffy Name to display");//this will prompt the message on screen asking the name
// export const userName="Aradhya"
const urlParams = new URLSearchParams(window.location.search); // this checks if the room id is already present or not by using the existing javascript class to search urls

const roomId = urlParams.get("id"); // to get the value of the room id

if (roomId){
    firepadRef= firepadRef.child(roomId);//child will help us to give reference of the particular collection in database
}
else{
    firepadRef= firepadRef.push();//new room create
    window.history.replaceState(null,"Meet","?id="+ firepadRef.key); // this will be use to append quer param without refreshing
}

export default firepadRef;