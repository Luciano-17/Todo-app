import '../styles/TodoList.css';

const TodoList = (props) => {
    const {error, onError, loading, onLoading, searchedTodos, onEmpty, render, totalTodos, onEmptySearch, children} = props;

    return (
        <>
            <section className='TodoList-container'>
                {error ? (
                    onError()
                ) : (
                    <>
                        {loading && (
                            onLoading()
                        )}

                        {(!loading && !totalTodos) && (
                            onEmpty()
                        )}

                        {(!!totalTodos && !searchedTodos.length) && (
                            onEmptySearch()
                        )}

                        {(!loading && !error) && searchedTodos.map(render)}
                    </>
                )}

                <ul>
                    {children}
                </ul>
            </section>
        </>
    )
}

export default TodoList