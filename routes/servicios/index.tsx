import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "components/index.ts";
import sql from "../../db/db.js";
import CheckBoolean from "../../islands/CheckBoolean.tsx";
import IconSquarePlus  from "icons/square-plus.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    ctx.state.title ='Servicios';
    //obtengo los servicios... todo esto sacarlo a funciones!!!


    const datos = await sql`
    select ts.id,to_char(fecha,'DD/MM/YYYY') fecha , substring(tt.descripcion from 0 for 4) serv, te.nombre emple, horas , 
    suplementolevantar,
     pagado
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

export default function Servicios(props: PageProps) {
	return (
    <Layout state={props.data.state}>

  <a href="/servicios/0"><IconSquarePlus /></a>

       <table class="table table-sm">
  <thead>
   <tr>
      <th scope="col">Dia</th>
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

      const href =`/servicios/${servicio.id}`;

      return (
        <tr>
            <td>{<a href={href}>{servicio.fecha}</a>}</td>
            <td>{servicio.serv}</td>
            <td>{servicio.emple}</td>
            <td>{servicio.horas}</td>
            <td>  <CheckBoolean tabla='t_servicios' columToChange='suplementolevantar' id={servicio.id}  valorBoolean={servicio.suplementolevantar} /> </td>
            <td>  <CheckBoolean tabla='t_servicios' columToChange='pagado' id={servicio.id}  valorBoolean={servicio.pagado} /> </td>
        </tr>
      )
      
    })

  }

   
  </tbody>
</table>
    </Layout>
	)
}
