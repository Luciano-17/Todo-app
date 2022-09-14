import '../styles/TodoEmptySearch.css'

const TodoEmptySearch = () => {
    return (
        <>
            <div className="NoResultsContainer">
                <i className="fa-solid fa-file-circle-exclamation NoResultsIcon"></i>
                <h2 className="NoResultsTitle">No se han encontrado resultados</h2>
                <p className="NoResultsText">Prueba con otros parametros de busqueda</p>
            </div>
        </>
    )
}

export default TodoEmptySearch