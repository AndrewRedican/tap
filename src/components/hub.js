import React, { Component } from 'react';

import Circle from './circle';

class Hub extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        //https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg
        //https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/600px-Ic_settings_48px.svg.png
        return (
            <Circle img='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/600px-Ic_settings_48px.svg.png' />
        );
    }
}

export default Hub;