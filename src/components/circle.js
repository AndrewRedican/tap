import React, { Component } from 'react';

import Aps from './aps'; // FFFFFA, ACBDBA, 5EB1BF, 0B0014, EFCB68

class Circle extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const size = Aps.getUnitSize();
        const bgColor = 'color' in this.props? this.props.color : '#FFFFFA';
        return(
            <div 
                style={{
                    boxSizing:'border-box',
                    width: size+'px',
                    height: size+'px',
                    overflow:'hidden',
                    borderRadius:'50%',
                    backgroundColor:'#0B0014',
                    position: 'absolute',
                    top:'position' in this.props? this.props.position.Y : '50%',
                    left:'position' in this.props? this.props.position.X : '50%',
                    transform:'position' in this.props? 'none' : 'translate(-50%,-50%)',
                    borderStyle:'none',
                    zIndex:3,
                    background:'#FFFFFA',
                    background:'-webkit-radial-gradient(circle, ' + bgColor + ', ' + bgColor + ', #0B0014)',
                    background:'-o-radial-gradient(circle, ' + bgColor + ', ' + bgColor + ', #0B0014)',
                    background:'-moz-radial-gradient(circle, ' + bgColor + ', ' + bgColor + ', #0B0014)',
                    background:'radial-gradient(circle, ' + bgColor + ', ' + bgColor + ', #0B0014)',
                }}
            >
            {'img' in this.props? 
                <img 
                    src={this.props.img}
                    style={{maxHeight:'100%'}}
                    alt={'text' in this.props? this.props.text:''}
            /> : void(0)}
            </div>
        );
    }
}

export default Circle;





