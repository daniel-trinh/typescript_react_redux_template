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
            for (let j of _.range(0, 7)) {
                slots.push(<FretSlot key={`j${j}fret`} height={25} width={65}/>);
                slots.push(<div key={`j${j}string`} style={stringStyle(j)}/>)
            }
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
            background: "#d9b38c"
        };
    }


    render(): JSX.Element {
        return <div>
            <div style={_.extend(this.fretSectionStyle(), this.fretStyle())}/>
        </div>
    }
}