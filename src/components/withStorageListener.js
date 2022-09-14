import React, { useState } from 'react'

const withStorageListener = (WrappedComponent) => {
    return function WrappedComponentWithStorageListener({sincronize}) {
        const [storageChange, setStorageChange] = useState(false)

        window.addEventListener('storage', change => {
            if(change.key === 'TODOS_V1') {
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            sincronize()
            setStorageChange(false)
        }

        return (
            <WrappedComponent 
                show={storageChange} 
                toggleShow={toggleShow} 
            />
        )
    }
}

export default withStorageListener;