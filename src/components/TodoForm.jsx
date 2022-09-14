import { useState } from "react"
import '../styles/Form.css';

const TodoForm = ({saveTodo, setOpenModal}) => {
    const [todoValue, setTodoValue] = useState('');

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = e => {
        e.preventDefault()
        saveTodo(todoValue)
        setOpenModal(false)
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
            >
                <label>Escribe un unevo TODO</label>
                <textarea
                    value={todoValue}
                    onChange={e => setTodoValue(e.target.value)}
                    placeholder='Ej: "Ir de compras"'
                ></textarea>

                <div className="TodoForm-buttonContainer">
                    <button
                        type='button'
                        className="TodoForm-button TodoForm-button--cancel"
                        onClick={onCancel}
                    >Cancelar</button>

                    <button
                        type='submit'
                        className="TodoForm-button TodoForm-button--add"
                    >Añadir</button>
                </div>
            </form>
        </>
    )
}

export default TodoForm