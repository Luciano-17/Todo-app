import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useTodos = () => {
    const {item: todos, saveItem: saveTodos, loading, error, sincronize} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(searchValue.length === 0) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText);
        })
    }

    const saveTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });

        saveTodos(newTodos);
    };

    const completedTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);

        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;

        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);

        saveTodos(newTodos);
    };

    const states = {
        loading,
        error,
        totalTodos,
        completedTodo,
        searchValue,
        openModal,
    };
    const statesUpdaters = {
        setSearchValue,
        searchedTodos,
        completedTodos,
        deleteTodo,
        setOpenModal,
        saveTodo,
        sincronize
    };

    return {states, statesUpdaters};
}

export default useTodos;