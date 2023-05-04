import { Head, asset } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import { Header } from "./index.ts";

type Props = {
  children: ComponentChildren;
  state?: any;
};

export function Layout(props: Props) {
  return (
    <>

<Head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" /> 
</Head>

      <Header  state={props.state} />
      <div class="mx-auto max-w-screen-md p-4">
        <div class="flex flex-col items-center">
          <h2>{props.state.title}</h2>
         
        </div>
        {props.children}
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>

    </>
  );
}
