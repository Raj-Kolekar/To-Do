import React , {useContext} from "react";

export const TodoContext = React.createContext({
    todos : [
        {
        id : 54,
        Todo : 'Todo message',
        completed : false,

    }
],
    addTodo : (Todo) => { },
    updateTodo : (id,Todo) => { },
    deleteTodo : (id,Todo) => { },
    toggleComplete : (id) => {},
});

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext);
}