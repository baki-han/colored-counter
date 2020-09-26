import React from "react";

function Lists(props){

    const  listsOfCounters = props.counters;

    return (<ul>
        {listsOfCounters.map((el, i)=>
            <li style={{backgroundColor :  el.title}} key={el.id}>
               {el.title}
               <button onClick={()=> props.minusOne(i)}>-</button>
               {el.count}
               <button onClick={()=> props.addOne(i)}>+</button>
               <button  onClick={()=> props.deleteById(el.id)}>del</button>
                <button disabled={i === 0} onClick={()=> props.moveUp(i)}>Up</button>
                <button disabled={i === listsOfCounters.length-1} onClick={()=> props.moveDown(i)}>Down</button>
           </li>
        )}
    </ul>);
}

export default Lists;

