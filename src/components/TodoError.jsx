import '../styles/TodoError.css';

const TodoError = () => {
    return (
        <>
            <div className='Error-container'>
                <i className="fa-solid fa-circle-exclamation ErrorIcon"></i>
                
                <h2 className='ErrorTitle'>Lo sentimos</h2>

                <p className='ErrorText'>Se produjo un error</p>
            </div>
        </>
    )
}

export default TodoError