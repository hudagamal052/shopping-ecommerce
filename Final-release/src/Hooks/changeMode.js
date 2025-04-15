

import { useState } from "react";
const UseToggle = (initialValue = false) => {
  const [Mode, setMode] = useState(initialValue);
    function Change(){
        setMode((prev)=>!prev)
    }
return [Mode,Change]
}

export default UseToggle;
