import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
};


export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos])


    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch( action ); 
    };


    const handleNDeleteTodo = ( id ) => {
        //  console.log({ id })
        dispatch({
            type: '[TODO] remove Todo',
            payload: id,
        });
    };


    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] toggle Todo',
            payload: id,
        });
    };


    return {
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter( todos => !todos.done ).length,
        handleNewTodo,
        handleNDeleteTodo,
        handleToggleTodo,
    };

};
