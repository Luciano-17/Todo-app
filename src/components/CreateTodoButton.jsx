import React from 'react'
import '../styles/CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal}) => {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
    }

    return (
        <>
            <button 
                type="button"
                onClick={onClickButton}
                className="CreateTodoButton">
                +
            </button>
        </>
    )
}

export default CreateTodoButton