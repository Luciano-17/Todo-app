import { useState, useEffect } from "react";

const useLocalStorage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState([])
    const [sincronizedItem, setSincronizedItem] = useState(true)
  
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
  
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
        } catch (error) {
          setError(error);
        }
      }, 4000);
    }, [sincronizedItem]);
  
    const saveItem = newItem => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem('TODOS_V1', stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }

    const sincronize = () => {
      setLoading(true)
      setSincronizedItem(false)
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