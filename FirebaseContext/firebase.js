import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

class Firebase{

    constructor(){
        this.auth = auth();
        this.db = firestore() ;
        this.storage = storage;
    }

    //all querys; "set" écrase et "update" met à jour

    queryUsers = () => firestore().collection("users") ;
    queryAddUser = (id, data) => firestore().collection("users").doc(id).set(data) ;
    queryUpdateUser = (id, data) => firestore().collection("users").doc(id).update(data) ;

    queryContact = () => firestore().collection("contacts") ;
    queryOneContact = (id) => firestore().collection("contacts").doc(`${id}`).get() ;
    queryAllContact = () => this.queryContact().orderBy('name', 'asc') ;
    queryAddContact = (contact) => this.queryContact().add(contact) ;
    queryDeleteContact = (id) => firestore().collection("contacts").doc(`${id}`).delete() ;
    queryUpdateContact = (id, data) => firestore().collection("contacts").doc(id).update(data) ;
    

    storageImg = (id, name,uri) => storage().ref(`images/${id}/${name}`).putFile(uri);
    storageGetImg = (id, name) => storage().ref(`images/${id}/${name}`).getDownloadURL();
 




}
export default Firebase ;