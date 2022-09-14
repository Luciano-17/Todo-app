import { cloneElement, Children } from "react"

const TodoHeader = ({children, loading}) => {
    return (
        <>
            <header>
                {Children.toArray(children).map(child => cloneElement(child, {loading}))}
            </header>
        </>
    )
}

export default TodoHeader