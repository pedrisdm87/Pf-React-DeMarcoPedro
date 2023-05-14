 import React from "react"
 import "./servicios.css"

function Servicios(params) {

    return(
        <>
        
    <tr> 
        <td>
            <h2 className="titulo">
                Asesoramiento personalizado
            </h2> 
        </td>
        <td>
            <h2 className="titulo">
                Servicio Técnico
            </h2>
        </td>

        <td>
            <h2 className="titulo">
                Insumos
            </h2>
        </td>
    </tr>
    
    <tr> 
        <td>
            <p className="titulo">
                Contanos tu proyecto, te ayudamos a hacerlo realidad.
            </p>
        </td>

        <td>
            <p className="titulo">
                Servicio postventa de excelencia.
            </p > 
        </td>
        
        <td>
            <p className="titulo">
                Stock Permanente.
            </p>
        </td>
        
    </tr>

    <tr>
        <td>
            <p className="titulo">
                En Soporte Técnico Co2 contamos con un equipo especializado en tecnologías de fabricación digital. Queremos potenciar tu proyecto, con las últimas herramientas disponibles, buscando la mejor solución para tu necesidad.
            </p>
        </td>
            
        <td>
            <p className="titulo">
                Nuestro equipo de asistencia técnica está preparado para asistirte en la puesta en marcha, operación y mantenimiento de equipos propios y de otros fabricantes, brindando una solución integral a necesidades nuevas y preexistentes.
            </p>
        </td>
        <td>
            <p className="titulo">
                Contamos con stock de todos los insumos para que tus proyectos crezcan con seguridad.
            </p>
        </td>
    </tr>   
    </>
    );
    }

    export default Servicios;