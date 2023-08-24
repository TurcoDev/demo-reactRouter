import { useState } from "react";

const Conditional = () => {
    const [show, setShow] = useState(true);

    const change = () => setShow(!show);

    return (
      <div>
         <h1>Renderizado condicional</h1>
         { show ? <p>React Render Conditional</p> : undefined }
         <button onClick={ change }> Alternar </button>
         <hr />
      </div>
    )
}

export default Conditional;