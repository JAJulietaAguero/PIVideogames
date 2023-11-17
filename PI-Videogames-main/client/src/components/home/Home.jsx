import Cards from "../cards/Cards";
import Nav from "../nav/Nav";


const Home= () => {
    return(
        <div>
            <Nav />
            <Cards />
        </div>
    )
}

export default Home;

// *Acá tiene que estar las Searchbar (para buscar videjuegos por nombre) (sListo!)
// *Va a tener dos botones Filtrar y Ordenar
// *Va a tener el paginado donde va a mostrar 15 videojuegos por página
// *Cuando se haga click en cualquier videojuego me va a redirigir al detalle del mismo