import React, { Component } from 'react';

import Circle from './circle';

class Satellite extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <Circle
                img=''
                position={this.props.position}
                key=''
                id=''
            />
        );
    }
}

export default Satellite;