import axios from 'axios';
import React,{createContext,useEffect,useState} from 'react';

export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {
    const [categorias, setCategorias] = useState([]);    
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
          .then(function (response) {
            setCategorias(response.data);
            console.log(response.data);
          })
          .catch(function (error) {
            console.error("Error fetching data:", error);
          });
      }, []);

    return (
        <CategoriaContext.Provider
            value={{                
                categorias,
                selectedCategory,
                setSelectedCategory
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaProvider;