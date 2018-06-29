export const loadState=()=>{
    try{
        const serializedState=localStorage.getItem('saveData')
        if (serializedState === null) {
            return undefined
        }
        let localState=JSON.parse(serializedState)
        
        return localState
    }catch(err){
        return undefined
    }
}
export const saveState=(state)=>{
    try {
        const serializedState=JSON.stringify(state)
        localStorage.setItem('saveData',serializedState)
    } catch (error) {
        throw new Error('save Error!')
    }
}