import React, { Component } from 'react';

import Header from './header';
import Main from './main';
import Footer from './footer';
import Menu from './menu';

class Signed extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div>
                <Header />
                <Main />
                <Footer />
                <Menu grid={'grid' in this.props? this.props.grid : false } />
            </div>
        );
    }
}

export default Signed;