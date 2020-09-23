import React, {useState} from "react";

function Header(props){

    const [titleValue, setTitle] = useState("");
    const [numberValue, setNumber] = useState(0)

   const inputHandlerTitle = (event) =>{
       setTitle(event.target.value);
   }

    const inputHandlerNumber = (event) =>{
        setNumber(event.target.value);
    }

   const buttonHandler = () =>{
        props.addCounter(titleValue, numberValue);
        setTitle("");
       setNumber(0);
   }

    return (<div className="header">
        <input onChange={inputHandlerTitle} type="text" placeholder="Enter Colour" value={titleValue}/>
        <input onChange={inputHandlerNumber} type="number" placeholder="Starting number" value={numberValue}/>
        <button onClick={buttonHandler}>add counter</button>
    </div>);
}
export default Header;