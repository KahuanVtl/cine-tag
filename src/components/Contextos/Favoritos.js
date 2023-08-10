import { createContext, useState } from "react";

export const FavoritoContext = createContext();
FavoritoContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritoContext.Provider 
        value={{favorito, setFavorito}}>
            {children}
        </FavoritoContext.Provider>
    )
}