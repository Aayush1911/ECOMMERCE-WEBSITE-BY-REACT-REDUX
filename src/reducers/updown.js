const initialstate=0;
const changenumber=(state=initialstate,action)=>{
   switch(action.type){
    case'increment' : return state+1;
    case'decrement' : return state-1;
    default:return state;
   }
}
export default changenumber