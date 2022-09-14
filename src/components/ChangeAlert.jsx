import '../styles/ChangeAlert.css';
import withStorageListener from "./withStorageListener"

const ChangeAlert = ({show, toggleShow}) => {
    if(show) {
        return (
            <>
                <div className='ChangeAlert-bg'>
                    <div className='ChangeAlert-container'>
                        <p>Hubo cambios en tus todos en otra pestaña</p>
                        <p>¿Quieres sincronizar tus todos?</p>

                        <button
                            className='TodoForm-button TodoForm-button--add'
                            type="button"
                            onClick={() => toggleShow(false)}
                        >
                            ¡Si!
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export default ChangeAlertWithStorageListener