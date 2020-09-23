import React, { useState } from "react";
import Header from "./Header";
import Lists from "./Lists";
import { v4 as uuidv4 } from 'uuid'; // id package

const initialCounters = [
    {id: uuidv4(), title: "Green", count: 5},
    {id: uuidv4(), title: 'Pink', count: 50},
    {id: uuidv4(), title: 'Orange', count: 50}
]



console.log(initialCounters)

function App() {

    const [counters, setCounters] = useState(initialCounters);

    // TODO delete counter
    const deleteById =(id) =>{
        const filteredCounters = counters.filter(el => el.id !== id);
        setCounters(filteredCounters);
    }

    //TODO increase counter
    const addOne = (index) =>{
        const newCounter = [...counters];
        newCounter[index].count += 1;
        setCounters(newCounter)
    }

    //TODO decrease counter
    const minusOne = (index) =>{
       const newCounter = [...counters];
       newCounter[index].count -= 1;
       setCounters(newCounter)
    }

    //TODO move up
    const moveUp = (index) =>{
      if(index === 0){setCounters(counters)}
      else{
          const newCounter = [...counters];
          const temp = newCounter[index];
          newCounter[index] = newCounter[index-1];
          newCounter[index-1] = temp;
          setCounters(newCounter);
      }
    }

    // TODO move down
    const moveDown = (index) =>{
        if(index === counters.length-1){setCounters(counters)}
        else{
            const newCounter = [...counters];
            const temp = newCounter[index];
            newCounter[index] = newCounter[index+1];
            newCounter[index+1] = temp;
            setCounters(newCounter);
        }
    }

    //TODO add counter
    const addNewCounter = (value1, value2) => {
        const obj = Object.create({id: uuidv4(), title: value1, count: value2});
        const newCounters = [...counters];
        newCounters.push(obj);
        setCounters(newCounters);
    }

    return (
        <div className="App">
            <Header addCounter={addNewCounter}/>
            <Lists counters={counters}
                   deleteById={deleteById}
                   addOne={addOne}
                   minusOne={minusOne}
                   moveUp={moveUp}
                   moveDown={moveDown}
            />
        </div>
    );
}

export default  App;