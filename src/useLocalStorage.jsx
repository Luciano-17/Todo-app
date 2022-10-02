import { useEffect, useReducer } from "react";

const initialState = {
  sincronizedItem: true,
  error: false,
  item: [],
  loading: true
};
const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
};

const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true
      };
    case actionTypes.success:
      return {
        ...state,
        item: action.payload,
        loading: false,
        sincronizedItem: true,
        error: false
      };
    case actionTypes.save:
      return {
        ...state,
        item: action.payload
      };
    case actionTypes.sincronize:
      return {
        ...state,
        loading: true,
        sincronizedItem: false
      };
  }
};

const useLocalStorage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {loading, error, item, sincronizedItem} = state;

    // Action Creators
    const onError = error => dispatch({ type: actionTypes.error, payload: error });
    const onSuccess = item => dispatch({ type: actionTypes.success, payload: item });
    const onSave = item => dispatch({ type: actionTypes.save, payload: item });
    const onSincronize = () => dispatch({ type: actionTypes.sincronize });
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem('TODOS_V1');
          let parsedItem;
  
          if(!localStorageItem) {
            localStorage.setItem('TODOS_V1', JSON.stringify([]));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          onSuccess(parsedItem);
        } catch (error) {
          onError(error)
        }
      }, 4000);
    }, [sincronizedItem]);
  
    const saveItem = newItem => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem('TODOS_V1', stringifiedItem);
        onSave(newItem);
      } catch (error) {
        onError(error)
      }
    }

    const sincronize = () => {
      onSincronize();
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      sincronize
    };
}

export default useLocalStorage;