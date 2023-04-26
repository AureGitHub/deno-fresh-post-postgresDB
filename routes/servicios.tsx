import { Handlers, PageProps } from "$fresh/server.ts";

import { Layout } from "components/index.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    ctx.state.title ='Servicios';
    //obtengo los servicios... todo esto sacarlo a funciones!!!
    return ctx.render(ctx.state);
  }
}

export default function Secret(props: PageProps) {
  console.log(props.data);
	return (
    <Layout state={props.data}>
        <h2>{props.data.user?.email}</h2>
        <p>Here's a little treat:</p>
  			<p class="text-[72px] text-align-center">🍋</p>
    </Layout>
	)
}
