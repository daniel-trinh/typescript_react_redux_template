import * as React from 'react'
import {Component} from 'react'
import * as UI from 'material-ui'
import * as Store from '../store'
import { connect } from 'react-redux'

interface MultipleChoiceProps {
    question:string
    choices:Array<string>
}

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginTop: 16,
        marginBottom: 16,
    },
};

export class MultipleChoice extends Component<MultipleChoiceProps, any> {
    question:string;
    choices:Array<string>;

    constructor(props:MultipleChoiceProps) {
        super(props);
        this.question = props.question;
        this.choices = props.choices;
        console.log(this.choices);
    }

    render():JSX.Element {
        return (
            <div>
                <UI.RadioButtonGroup name="multi quiz">
                    {this.choices.map(function(value) {
                        return <UI.RadioButton
                            value={value}
                            label={value}
                            style={styles.radioButton}
                        />
                    })}
                </UI.RadioButtonGroup>
                <UI.RaisedButton label="Submit" style={{margin: 12}} />
            </div>
        )
    }
}

export default connect((state:Store.Data, props:any) => {
    return state.quizzes.multipleChoice;
})(MultipleChoice as any)