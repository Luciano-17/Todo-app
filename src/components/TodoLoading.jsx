import '../styles/TodoLoading.css';

const TodoLoading = () => {
    return (
        <>
            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'></p>
            </div>

            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'></p>
            </div>

            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'></p>
            </div>
        </>
    )
}

export default TodoLoading