import{ createContext, useState, useContext} from 'react'

const todoContext= createContext()

export function TodoProvider({children}){
    const[todos,setTodos] = useState([])
}

const addTodo =(todoText) => {
    const newTodo= {id:Date.now(),
        todoText, completed:Flase }
        setTools([...todos,newTodo])
}



return(
    <todoContext.Provider value =
    {{add}}
)