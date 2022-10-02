import useTodos from "./useTodos";

import TodoHeader from "./components/TodoHeader";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
import Modal from "./components/Modal";
import TodoForm from "./components/TodoForm";

import TodoError from "./components/TodoError";
import TodoLoading from "./components/TodoLoading";
import TodoEmpty from "./components/TodoEmpty";
import TodoEmptySearch from "./components/TodoEmptySearch";
import ChangeAlertWithStorageListener from "./components/ChangeAlert";

function App() {
  const { states, statesUpdaters } = useTodos();
  const {
    loading,
    error,
    totalTodos,
    completedTodo,
    searchValue,
    openModal,
  } = states;
  const {
    setSearchValue,
    searchedTodos,
    completedTodos,
    deleteTodo,
    setOpenModal,
    saveTodo,
    sincronize
  } = statesUpdaters;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <TodoEmpty />}
        onEmptySearch={() => <TodoEmptySearch />}
        render={todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completedTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      {!!openModal && (
          <Modal>
              <TodoForm saveTodo={saveTodo} setOpenModal={setOpenModal} />
          </Modal>
      )}

      <CreateTodoButton 
          setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener sincronize={sincronize} />
    </>
  )
}

export default App;
