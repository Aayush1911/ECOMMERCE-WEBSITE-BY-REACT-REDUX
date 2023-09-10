export const incnumber=()=>{
    return{
        type:'increment'
    }
}

export const decnumber=()=>{
    return{
        type:'decrement'
    }
}

export const setname=(name)=>{
    return{
        type:'message',
        payload:name
    }
}