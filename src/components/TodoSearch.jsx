import '../styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue, loading}) => {
    const onSearchValueChange = e => {
        setSearchValue(e);
    }

    return (
        <>
            <input
                type='text' 
                className='TodoSearch' 
                placeholder="Busqueda de Todos"
                value={searchValue}
                onChange={e => onSearchValueChange(e.target.value)}
                disabled={loading}
            />
        </>
    )
}

export default TodoSearch