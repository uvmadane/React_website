import React, { useState } from "react";

const App = () =>{
    let newTime = new Date().toLocaleTimeString();

    const[ctime, setCtime]=useState(newTime);

    const UpdateTime = () =>{

        newTime = new Date().toLocaleTimeString();

        setCtime(newTime);
    }


    return(
        <>
            <h1 className="time">  {ctime }</h1>
            <button className="btn1" onClick={UpdateTime}> Get time </button>
        </> 

    );
}

export default App;
