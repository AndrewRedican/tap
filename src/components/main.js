import React, { Component } from 'react';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div
            style={{
                height:'618px',
                width:'100%',
                position:'absolute',
                top:'50%',
                transform:'translateY(-50%)',
                opacity:0.75,
                borderStyle:'dashed',
                zIndex:1
            }}> 
                
            </div>
        );
    }
}

export default Main;