import {AFF_EXEMPLE} from '../Actions/types' ;

const initStateExemple = true;


const exemple = (state = initStateExemple, action) => {
    console.log("action", action)
    switch (action.type) {
        case AFF_EXEMPLE:
            return action.payload ;
            break;
    
        default:
            return state ;
            break;
    }
}

export default exemple ;