// import {setname} from '../actions/index'
const showmessage=(state='',action)=>{
    switch(action.type){
        case 'setname' :
        return action.payload;
        default: return state
    }
}
export default showmessage;