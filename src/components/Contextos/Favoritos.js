import { createContext, useContext, useState } from "react";

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

export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritoContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(itens => itens.id === novoFavorito.id)

        let novaLista = [...favorito]

        if(!favoritoRepetido){
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}