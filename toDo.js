import React, { Component } from "react";

//arrow function: 
const List = (props) => {
    return <p>{props.tasks.join(", ")}</p>
};




class ToDo extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>To Do List: </h1>
                <h3>Today: </h3>
                <List tasks={["Walk", "Cook", "Code"]}/>  
                <h3>Tomorrow: </h3> 
                <List tasks={["Clean", "Walk", "Study"]} /> 
            </div>
        )
    }
}

export default ToDo;