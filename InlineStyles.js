import React, { Component } from "react";

//variable : 
const styles = {
    color: "purple", 
    border: "2px solid",
    fontSize: 40, 
    textAlign: 'center'
}

class Colorful extends Component {
    render(){
        return (
            <div style={styles}>Style Me!</div>
        )
    }
}

export default Colorful;