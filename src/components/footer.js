import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div
                style={{
                    backgroundColor:'#0B0014',
                    height:'236px',
                    width:'100%',
                    position:'absolute',
                    bottom:0,
                    zIndex:0,
                    background:'#0B0014',
                    background:'-webkit-linear-gradient(bottom, #5EB1BF, #0B0014))',
                    background:'-o-linear-gradient(top, #5EB1BF, #0B0014)',
                    background:'-moz-linear-gradient(top, #5EB1BF, #0B0014))',
                    background:'linear-gradient(to top, #5EB1BF, #0B0014)'
                }}>
            
            </div>
        );
    }
}

export default Footer;