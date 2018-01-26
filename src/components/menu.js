import React, { Component }     from 'react';
//import { TransitionGroup }      from 'react-transition-group';
//import { CSSTransition   }      from 'react-transition-group';
import { CSSTransition, transit } from "react-css-transition";

import Hub                      from './hub';
import Satellite                from './satellite';
import Grid                     from './grid';

import Aps                      from './aps';

const options = [
    {text:'', src:'', endprice:'', taxation: '', baseprice: ''},
    {text:'', src:'', endprice:'', taxation: '', baseprice: ''},
    {text:'', src:'', endprice:'', taxation: '', baseprice: ''},
    {text:'', src:'', endprice:'', taxation: '', baseprice: ''},
    {text:'', src:'', endprice:'', taxation: '', baseprice: ''},
]

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.renderSatellites = this.renderSatellites.bind(this);
    }
    render(){
        const 
            satellites  = this.renderSatellites(options.length);
        return (
            <div
                style={{
                    position:'absolute',
                    top:0,
                    left:0, 
                    height:'100%',
                    width:'100%',
                    zIndex:2
                }}    
            >
                {'grid' in this.props? this.props.grid? <Grid /> : void(0) : void(0) }
                <Hub />
                
                    {satellites}
                
            </div>
        );
    }
    renderSatellites(number){
        const 
            Positions           = Aps.getPositions(number),
            PositionsII         = Aps.clusterPositions(Positions),
            AdjustedCenter      = Aps.getAdjustedCenterPosition();
        
        return Positions.map((O,I) => {
            const OffsetToCenter = {
                X: -(O.X - AdjustedCenter.X),
                Y: -(O.Y - AdjustedCenter.Y)
            }
            console.log(OffsetToCenter);
            return (
                <CSSTransition 
                    key                 = {I}
                    defaultStyle        = {{ transform: 'translate( ' + OffsetToCenter.X + 'px, ' + OffsetToCenter.Y + 'px)'}}
                    enterStyle          = {{ transform: transit('translate(0, 0)', 500, 'ease-in-out') }}
                    leaveStyle          = {{ transform: transit('translate( ' + OffsetToCenter.X + 'px, ' + OffsetToCenter.Y + 'px)', 500, 'ease-in-out') }}
                    activeStyle         = {{ transform: 'translate(0, 0)' }}
                    transitionAppear    = {true}
                    active              = {true}
                >
                    <Satellite 
                        key         = {I}
                        position    = {O}
                    />
                </CSSTransition >
            );
        });
        return <div />
    }
}

export default Menu;

/*

                    key                 = {I}
                    defaultStyle        = {{ transform: "translate(175px, 0)"}}
                    enterStyle          = {{ transform: transit("translate(0, 0)", 500, "ease-in-out") }}
                    leaveStyle          = {{ transform: transit("translate(175px, 0)", 500, "ease-in-out") }}
                    activeStyle         = {{ transform: "translate(0, 0)" }}
                    transitionAppear    = {true}
                    active              = {true}


*/