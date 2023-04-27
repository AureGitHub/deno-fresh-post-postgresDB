import {enumUserPrefil} from "../constantes/enums.ts"
import { NavButton, NavLink } from "./index.ts";

import IconLogin  from "icons/login.tsx";

import IconLogout  from "icons/logout.tsx";

type Props = {    
    state: any;
  };
export  function Header(props: Props) {
    console.log('isAllowed : ' + props.state.user?.perfil);
    const isAllowed = props.state.user?.perfil;
    const isSuper = props.state.user?.perfil == enumUserPrefil.super;
    const isAdmin = props.state.user?.perfil == enumUserPrefil.admin || isSuper;

    const buttProps = isAllowed
    ? { href: "/api/sign-out", text: "Sign Out" }
    : { href: "/login", text: "Login" };

    const colorButtonMenu =  isAllowed ? 'bg-green-200' : 'bg-gray-300';

    return (
        <header className="container navbar navbar-expand-lg w-full  bg-gray-100">
            <div className="container-fluid">
                <a className="navbar-brand text-primary" href="/">{ Deno.env.get('TITULO') }</a>
               
               {isAllowed && <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon ${colorButtonMenu}`}></span>
                </button>                
                }
               {!isAllowed && <a href="/login"><IconLogin  className="text-green-800" /></a> }
                
              

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">



                        {isAllowed &&  <li className="nav-item">
                            <a className="nav-link" href="/secret">secret</a>
                        </li>}

                         {isAllowed &&   <li className="text-white hover:text-indigo-200">
                         <a className="nav-link" href="/servicios">servicios</a>
                            </li>}






                    </ul>

                    <div  className="justify-content-end">
                        
                        {isAllowed && <a href="/api/sign-out"><IconLogout  className="text-red-800" /></a> }
                    </div>

                </div>

            </div>
        </header>
    );
}