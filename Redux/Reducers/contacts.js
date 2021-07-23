import {ADD_CONTACT, DELETE_CONTACT, UP_CONTACT} from '../Actions/types' ;


initStateContact=[] ;

const contacts = (state=initStateContact, action) => {
   switch (action.type) {
       case ADD_CONTACT:
           return [...state, action.payload] ;
           break;
           case DELETE_CONTACT:
            const newContacts = state.filter(contact=> contact.id != action.payload) ;
               return newContacts ;
            //    return  action.payload ;
               break;
               case UP_CONTACT:
                const newData = state.map(contact=>{
                   //si on retrouve l'id correspondant à celui du payload, la retourne nouvelle valeur
                     if (contact.id === action.payload.id) {
                        return action.payload ;
                     }
                     //sinon retourne valeur par défaut de contact
                     return contact ;

                  }) ;
                  return newData ;
                   break;
   
       default:
           return state
           break;
   }
}

export default contacts