import { FormButton, Input, Link } from "components/index.ts";

import IconCheckbox  from "icons/checkbox.tsx";
import IconSquare  from "icons/square.tsx";
import { useSignal } from "@preact/signals";

type Props = {
  // mode: "In" | "Up";
  // errLogin : string | null;
  // user : any | null;
  tabla : string;
  columToChange : string;
  id: number;  
  valorBoolean : boolean;
};

export default function CheckBoolean({tabla,columToChange, id, valorBoolean }: Props) {
  
  const check = useSignal(valorBoolean);



  const changeBoolean = async () => {
  
    
    const response = await fetch("/api/update-boolean", {
      method: "POST",
      body: JSON.stringify({
        tabla, 
        columToChange,
        id,
        newVaue : !check.value
      }),
    });
    
    
    const data = await response.json();
    console.log(data);

    if(data.resultado==true){
      check.value = !check.value;
    }
    else{
      alert(`Error : ${data.error}`);
    }

    
    

  }

  return (
    <div class="items-stretch min-w-0">
        {check.value && <IconCheckbox  className="text-green-800 hand" onClick={changeBoolean} />}
        {!check.value && <IconSquare  className="text-red-800 hand" onClick={changeBoolean} />}
    </div>
  );
}



