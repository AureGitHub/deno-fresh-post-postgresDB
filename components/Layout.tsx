import { ComponentChildren } from "preact";
import Nav from "../islands/Nav.tsx";

type Props = {
  children: ComponentChildren;
  state: any;
};

export function Layout(props: Props) {
  return (
    <>
        <Nav  state={props.state} />
      <div class="mx-auto max-w-screen-md p-4">
        {props.children}
      </div>
    </>
  );
}
