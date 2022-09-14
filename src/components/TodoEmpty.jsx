import '../styles/TodoEmpty.css';

const TodoEmpty = () => {
    return (
        <>
            <div className='EmptyContainer'>
                <i className="fa-solid fa-paste EmptyIcon"></i>
                <h2 className='EmptyTitle'>Crea tu primer TODO</h2>
                <p className='EmptyText'>Usa <span>+</span> para crear tu primer TODO</p>
            </div>
        </>
    )
}

export default TodoEmpty