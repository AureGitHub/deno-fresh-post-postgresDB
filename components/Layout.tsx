import { Head, asset } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Nav from "../islands/Nav.tsx";
import { Header } from "./index.ts";

type Props = {
  children: ComponentChildren;
  state?: any;
};

export function Layout(props: Props) {
  return (
    <>

<Head>

{/* With CDN  */}

{/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" /> */}

{/* With Local */}

<link href={asset("bootstrap.min.css")} rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />

</Head>

      <Header  state={props.state} />
      <div class="mx-auto max-w-screen-md p-4">
        <div class="flex flex-col items-center">
          <h2>{props.state.title}</h2>
         
        </div>
        {props.children}
      </div>

      <script src={asset("bootstrap.bundle.min.js")} integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>


    </>
  );
}
