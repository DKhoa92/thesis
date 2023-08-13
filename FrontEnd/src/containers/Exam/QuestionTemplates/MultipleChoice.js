import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MultipleChoice.scss';
import * as actions from '../../../store/actions';
import { MultipleChoiceAnswerModel } from '../../../models';

class MultipleChoice extends Component {
    constructor(props) {
        super(props);

        let { question, updateReduxAnswer, idx } = props
        let numberOfQuestion = question.answers.length;

        this.state = {
            choices: []
        }
        for (let i = 0; i < numberOfQuestion; i++) {
            this.state['choices'][i] = false;
        }

        let answer = new MultipleChoiceAnswerModel(
            question.id,
            this.state.choices
        );
        updateReduxAnswer(answer, idx);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let { choices } = this.state;
        let { idx, question } = this.props;
        let questionContent = question.question;
        let answers = question.answers;

        return (
            <div className='exam-content'>
                <div className='question-section'>
                    <div className='media'></div>
                    <div className='text'>{questionContent}
                    </div>
                </div>
                <div className='answer-section'>
                    {answers && answers.length > 0 &&
                        answers.map((item, index) => {
                            return (
                                <div className={'answer col-auto'} key={index} >

                                    <label htmlFor={`answer_${idx}_${index}`} >
                                        <div className={'button' + (choices[index] ? ' active' : '')}>
                                            <div className='answer-text'>{item}</div>
                                        </div>
                                    </label>
                                    <input id={`answer_${idx}_${index}`} type='checkbox' checked={choices[index]}
                                        onChange={(event) => { this.onChangeAnswer(event, index) }}></input>
                                </div>)
                        })}
                </div>
            </div >
        );
    }

    onChangeAnswer(event, id) {
        let { updateReduxAnswer, question } = this.props;

        let newState = { ...this.state };
        newState['choices'][id] = event.target.checked;
        let answer = new MultipleChoiceAnswerModel(
            question.id,
            newState.choices
        );
        updateReduxAnswer(answer);
        this.setState({
            ...newState
        })
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateReduxAnswer: (answer, idx) => dispatch(actions.updateAnswer(answer, idx)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoice);
