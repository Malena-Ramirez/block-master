import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from "react-redux";

const CrudMovies = () => {
    
    const pelicula = useSelector(store => store.registerMovies.pelicula);
    console.log( 'pelicula' , pelicula);

    return (
        <Table className="mt-3 bg-light rounded" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Puntuación</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
            {
                (pelicula) ?
                (
                    pelicula.map(element => (

                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                            <td>{element.overview}</td>
                            <td>{element.vote_average}</td>
                            <td>{element.image}</td>
                        </tr>

                    ))
                ):
                <p>Datos no disponibles</p>
            }
          
        </tbody>
      </Table>
    )
}

export default CrudMovies
