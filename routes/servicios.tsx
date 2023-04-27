import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "components/index.ts";
import sql from "../db/db.js";


export const handler: Handlers = {
  async GET(_req, ctx) {
    ctx.state.title ='Servicios';
    //obtengo los servicios... todo esto sacarlo a funciones!!!


    const datos = await sql`
    select to_char(fecha,'DD/MM/YYYY') fecha , substring(tt.descripcion from 0 for 4) serv, te.nombre emple, horas , 
    case when suplementolevantar = TRUE then 'X' else '' end as suple,
    case when pagado = TRUE then 'X' else '' end as pagado
    from t_servicios ts
    left join tc_tiposservicios tt on ts.fk_tiposervicio =tt.id 
    left join t_empleadas te on ts.fk_empleada = te.id 
    order by fecha  desc
  
    `;

    


    return ctx.render({
      state : ctx.state,
      datos 

    });
  }
}

export default function Secret(props: PageProps) {
  console.log(props.data);
	return (
    <Layout state={props.data.state}>
       <table class="table table-sm">
  <thead>
   <tr>
      <th scope="col">Día</th>
      <th scope="col">Tipo</th>
      <th scope="col">Empl.</th>
      <th scope="col">Horas</th>
      <th scope="col">S</th>
      <th scope="col">P</th>
    </tr>
  </thead>
  <tbody>

  {
    props.data.datos.map((servicio) => {
      return (
        <tr>
            <td>{servicio.fecha}</td>
            <td>{servicio.serv}</td>
            <td>{servicio.emple}</td>
            <td>{servicio.horas}</td>
            <td>{servicio.suple}</td>
            <td>{servicio.pagado}</td>
        </tr>
      )
      
    })

  }

   
  </tbody>
</table>
    </Layout>
	)
}
