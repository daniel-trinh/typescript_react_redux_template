import * as React from 'react'
import {Component} from 'react'
import * as UI from 'material-ui'
import * as Store from '../store'
import { connect } from 'react-redux'
import * as _ from "lodash";

enum Handedness {
    LEFT,
    RIGHT
}

enum StringOrientation {
    UP,
    DOWN
}

interface FretboardProps {
    frets: number
    handedness?: Handedness,
    direction?: StringOrientation
}

export class Fretboard extends Component<FretboardProps, any> {
    props: FretboardProps;
    constructor(props) {
        super(props);
        this.props = props;
    }

    render(): JSX.Element {
        let fretboard = [];
        for (let i of _.range(0, this.props.frets)) {
            let slots = [];

            let sideFretHeight = 10;
            for (let j of _.range(0, 6)) {
                let height = 25;
                if (j == 0) {
                    height = sideFretHeight;
                }
                slots.push(<FretSlot key={`j${j}fret`} height={height} width={65}/>);
                slots.push(<div key={`j${j}string`} style={stringStyle(j)}/>)
            }
            slots.push(<FretSlot key={`j${7}fret`} height={sideFretHeight-3} width={65}/>);

            fretboard.push(<div key={`i${i}fretrow`} style={floatStyle}>{slots}</div>)
        }
        return <div style={fretRow}>
            {fretboard}
        </div>
    }
}

function stringStyle(stringNum: number) {
    let scaledNum = (stringNum+5)*0.4;
    return {
        height: scaledNum,
        border: 0,
        boxShadow: `0 ${scaledNum}px ${scaledNum}px 0px #999999 inset`
    };
}


const fretRow = {
    width: 65 * 13,
    overflow: "auto"
};

const numberToNoteString =  {
    "1": "E",
    "2": "A",
    "3": "D",
    "4": "G",
    "5": "B",
    "6": "E",
};


const floatStyle = {
    float: "left"
};

interface FretSlotProps {
    guitarString?: number
    fretNumber?: number
    height: number
    width: number
}

export class FretSlot extends Component<FretSlotProps, any> {
    height: number;
    width: number;
    boardColor: string =  "#d9b38c";

    constructor(props) {
        super(props);
        this.height = props.height;
        this.width = props.width;
    }

    fretStyle() {
        return {
            height: this.height,
            boxShadow: "3px 0px 0px 0px #ccc"
        };
    }

    fretSectionStyle() {
        return {
            width: 65,
            marginRight: 5,
            height: this.fretSectionStyle,
            background: this.boardColor
        };
    }

    fretSectionStyleCircle() {
        return {
            width: 120,
            height: 120,
            background: "#7fee1d",
            fontSize: 16,
            color: "#fff",
            textAlign:"center",
            borderRadius: 60
        };
    }

    render(): JSX.Element {
        return <div>
            <div style={_.extend(this.fretSectionStyle(), this.fretStyle())}/>
        </div>
    }
}