// APS: App Positioning System
// by Andrew John Redican 2017

/*$a = $('.app'),
ah = $a.outerHeight(), 
aw = $a.outerWidth() */

var 
    Height = 1618,
    Width = 1000,
    CenterPosition,
    Outlines,
    HorizontalUnits = 5,
    UnitSize,
    SlateSize,
    AdjustedCenterPosition,
    SlatesPerRow,
    SlatesPerColumn,
    SlatesTotal,
    GridDimensions,
    GridVisible = false;

updateSpecs();

const Aps = {
    
    // Set Functions: ##############################################################
    setAppDimensions:   (width,height) => { setAppDimensions(width,height); },
    setHorizontalUnits: (number)       => { setHorizontalUnits(number);     },
    setGridVisible:     (visible)      => { setGridVisible(visible);        },

    
    // Get Functions: ##############################################################
    getAppHeight:               () => { return Height;                      },
    getAppWidth:                () => { return Width;                       },
    getCenterPosition:          () => { return CenterPosition;              },
    getAdjustedCenterPosition:  () => { return AdjustedCenterPosition;      },
    getOutlines:                () => { return Outlines;                    },    
    getHorizontalUnits:         () => { return HorizontalUnits;             },
    getUnitSize:                () => { return UnitSize;                    },
    getSlateSize:               () => { return SlateSize;                   },
    getSlatesPerRow:            () => { return SlatesPerRow;                },
    getSlatesPerColumn:         () => { return SlatesPerColumn;             },
    getSlatesTotal:             () => { return SlatesTotal;                 },
    getGridDimensions:          () => { return GridDimensions;              },
    getGridVisible:             () => { return GridVisible;                 },
    
    getPositions:           (number)        => { return getPositions (number);        },
    clusterPositions:       (positions)     => { return clusterPositions (positions); }
    
}

// Internal Functions: #############################################################
function setAppDimensions(w,h){ 
    Width = w; Height = h;
    updateSpecs();
}
function setHorizontalUnits(hu){ 
    HorizontalUnits = hu;
    updateSpecs();
}
function setGridVisible(v){
    GridVisible = v;
}

function updateSpecs(){
    CenterPosition = { 
        X: Width / 2, 
        Y: Height / 2
    };
    Outlines = {
        Left:   Width  * 2/8,
        Right:  Width  * 6/8,
        Top:    Height * 2/8,
        Bottom: Height * 6/8
    };
    UnitSize = Width / HorizontalUnits;
    SlateSize = UnitSize / 2;
    AdjustedCenterPosition = {
        X: CenterPosition.X - SlateSize,
        Y: CenterPosition.Y - SlateSize
    };
    SlatesPerRow = Math.round( Width / SlateSize );
    SlatesPerColumn = Math.round( Height / SlateSize );
    SlatesTotal = SlatesPerRow * SlatesPerColumn;
    GridDimensions = {
        Width: SlatesPerRow * SlateSize,
        Height: SlatesPerColumn * SlateSize
    };
}

function getPositions(Number,StartAngle){
    var 
        StartAngle  = StartAngle || 0,
        Radius      = adjustRadiusforConstantSeparation(Number),
        Angle       = adjustAngletoPersistHorizontalOrientation(Number,-90 + StartAngle),
        Positions   = getEquiangularPositions(Number,Angle,Radius),
        Separation  = SlateSize * 3,
        Positions   = scalePositions(Positions,Separation),
        Positions   = centerPositions(Positions);
    return Positions;
}

function clusterPositions(Positions){
    const
        Number = Positions.length;
    if(Number <= 3 || Number === 5) return Positions;
    var 
        VirtualPositions,
        Iterations;
    switch(Number){
        case 4: case 6: case 8:
            VirtualPositions = getVirtualPositions(Number);
            Iterations       = Number / 2;
            for(var i=0; i<Iterations; i++){
                const 
                    I1 = i * 2,
                    I2 = I1 + 1,
                    P1 = Positions[I1],
                    PA = VirtualPositions[I1],
                    P2 = Positions[I2];
                Positions[I1] =  {
                    X: avg(PA.X, P1.X, 2),
                    Y: avg(PA.Y, P1.Y, 2)
                }
                Positions[I2] =  {
                    X: avg(PA.X, P2.X, 2),
                    Y: avg(PA.Y, P2.Y, 2)
                }
            }
            return Positions;
        case 9:
            Positions.push(Positions.shift());
            Positions.push(Positions.shift());
            Iterations       = Number / 3;
            for(var i=0; i<Iterations; i++){
                const 
                    I1 = i * 3,
                    IA = I1 + 1,
                    I2 = I1 + 2,
                    P1 = Positions[I1],
                    PA = Positions[IA],
                    P2 = Positions[I2];
                Positions[I1] =  {
                    X: avg(PA.X, P1.X, Number / 3),
                    Y: avg(PA.Y, P1.Y, Number / 3)
                }
                Positions[I2] =  {
                    X: avg(PA.X, P2.X, Number / 3),
                    Y: avg(PA.Y, P2.Y, Number / 3)
                }
            }
            return Positions;
    }
}

function avg(A,B,C){
    if(C === 1 || C === null || C === undefined) return ((A + B ) / 2);
    return avg(avg(A,B,C-1),B,1);
}

function getVirtualPositions(Number){
   return getPositions(Number,(180/Number));
}

function centerPositions(Positions){
    return Positions.map((P) => { 
        return { 
            X: P.X - SlateSize,
            Y: P.Y - SlateSize
        }; 
    });
}

function scalePositions(Positions,Separation){
    return Positions.map((P) => { 
        return { 
            X: (P.X * Separation) + CenterPosition.X,
            Y: (P.Y * Separation) + CenterPosition.Y
        }; 
    });
}

function adjustAngletoPersistHorizontalOrientation(Number,Angle){
    return Number % 2 === 0 ? Angle + (180 / Number) : Angle; 
}

function adjustRadiusforConstantSeparation(Number){
    var 
        Number = Number < 5 ? 5 : Number,
        Angle = DegreesToRadians( 180 / Number ),
        Radius = 1 / (2 * Math.sin(Angle)),
        Radius = RoundToNthDigit(Radius,4);
    return Radius;
}

function fibonacci(n)  { 
    return Math.pow(0.618,n);
}

function getEquiangularPositions(Number, StartAngle, Radius){
    var 
        Number = Number || 3,
        Number = Math.round(Number),
        Origin = { X : 0, Y : 0 },
        Radius = Radius || 1,
        StartAngle = DegreesToRadians( StartAngle || 0),
        AngleSegment = 2 * Math.PI / Number,
        EllipseFactor = Number > 6 ? 0.618 + (0.382 * ((6 - (Number - 6))/6)): 1;
        
    var Positions = new Array();
    for(var i=0; i<Number ; i++){
        var Angle = StartAngle + (i * AngleSegment),
            X = RoundToNthDigit(Origin.X + EllipseFactor * Radius * Math.cos(Angle),4),
            Y = RoundToNthDigit(Origin.Y + Radius * Math.sin(Angle),4);
        Positions.push({ X:X , Y:Y });
    }
    return Positions;
}

function RoundToNthDigit(value,digits){
    var precision = 1;
    for(var i=0; i<digits-1; i++){
        precision = precision * 10;
    }
    return Math.round(value * precision) / precision;
}

function DegreesToRadians(degrees){ return degrees * Math.PI / 180; }

function RadiansToDegrees(radians){ return radians * 180 / Math.PI; }

function RandomChoice(number){ return Math.floor((Math.random() * number)); }

export default Aps;