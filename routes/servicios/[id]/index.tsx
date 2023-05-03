import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../../../components/index.ts";

export const handler: Handlers = {


  GET(_req, ctx) {
    
    const { id } = ctx.params;
    ctx.state.title = parseInt(id)==0 ? 'Añadir ' : 'Modificar ';
    ctx.state.title+='Servicios';

    return ctx.render({
        state : ctx.state,
        data: { id },
  
      });


    
  },
};

export default function EditPostPage(props: PageProps) {
    
  return (

    <Layout state={props.data.state}>

        <div class="p-4 mx-auto max-w-screen-md">
        Aure = {props.data.data.id}
      </div>

    </Layout>


      
  )
}