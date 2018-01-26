import React, { Component } from 'react';

import Aps from './aps';

class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.renderSlates = this.renderSlates.bind(this);
    }
    render(){
        const 
            SlatesTotal = Aps.getSlatesTotal(),
            SlateSize = Aps.getSlateSize(),
            GridDimensions = Aps.getGridDimensions(),
            GridWidth = GridDimensions.Width,
            GridHeight = GridDimensions.Height,
            AppHeight = Aps.getAppHeight();
        
        const slates = this.renderSlates(SlateSize, SlatesTotal);
        return (
            <div 
                style={{
                    zIndex:-1,
                    width: GridWidth,
                    height: GridHeight,
                    border:'1px solid #ececec',
                    borderWidth:'1px 0 0 1px',
                    position:'absolute',
                    top:( AppHeight - GridHeight ) / 2,
                    left:0
                }}>
                {slates}
            </div>
        );
    }
    renderSlates(size, number){
        var slates = new Array();
        for (var i = 0; i < number; i++) { slates.push(i); }
        return slates.map((o) => {
            return (
                <div 
                    key={'T'+o}
                    style={{
                        width: size - 1,
                        height: size - 1,
                        border: '1px solid #ececec',
                        borderWidth: '0 1px 1px 0',
                        float: 'left'
                    }} 
                />
            );
        });
    }
}

export default Grid;