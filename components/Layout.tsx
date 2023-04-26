import { ComponentChildren } from "preact";
import Nav from "../islands/Nav.tsx";

type Props = {
  children: ComponentChildren;
  state?: any;
};

export function Layout(props: Props) {
  return (
    <>
        <Nav  state={props.state} />
      <div class="mx-auto max-w-screen-md p-4">
        <div class="flex flex-col items-center">
          <h2>{props.state.title}</h2>
         
        </div>
        {props.children}
      </div>
    </>
  );
}
