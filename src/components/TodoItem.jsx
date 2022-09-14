import '../styles/TodoItem.css';

const TodoItem = ({onCompleted, onDelete, text, completed}) => {
    return (
        <>
            <li className="TodoItem">
                <span
                    onClick={onCompleted} 
                    className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
                    {completed ? (
                        <i className="fa-regular fa-square-check"></i>
                    ) : (
                        <i className="fa-regular fa-square"></i>
                    )}
                </span>

                <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                    {text}
                </p>
                
                <span
                    onClick={onDelete} 
                    className="Icon Icon-delete">
                    <i className="fa-regular fa-circle-xmark"></i>
                </span>
            </li>
        </>
    )
}

export default TodoItem