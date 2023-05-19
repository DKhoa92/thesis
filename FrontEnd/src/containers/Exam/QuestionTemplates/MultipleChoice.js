import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MultipleChoice.scss';
import { FormattedMessage } from 'react-intl';
class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        let content, answers;
        if (props.question && props.question.data) {
            this.questionData = JSON.parse(props.question.data);
            content = this.questionData.content;
            answers = this.questionData.answers
        }
        this.state = {
            content: content ? content : '',
            answers: answers ? answers : '',
        }

        for (let i = 0; i < this.state.answers.length; i++) {
            this.state[`choice_${i}`] = false;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let { content, answers } = this.state;
        return (
            <div className='exam-content'>
                <div className='question-section'>
                    <div className='media'></div>
                    <div className='text'>{content}
                    </div>
                </div>
                <div className='answer-section'>
                    {answers && answers.length > 0 &&
                        answers.map((item, index) => {
                            return (
                                <div className={'answer col-auto'} key={index} >

                                    <label htmlFor={`answer_${index}`} >
                                        <div className={'button' + (this.state[`choice_${index}`] ? ' active' : '')}>
                                            <div className='answer-text'>{item}</div>
                                        </div>
                                    </label>
                                    <input id={`answer_${index}`} type='checkbox' checked={this.state[`choice_${index}`]}
                                        onChange={(event) => { this.onChangeAnswer(event, `choice_${index}`) }}></input>
                                </div>)
                        })}
                </div>
            </div >
        );
    }

    onChangeAnswer(event, id) {
        console.log(event);
        let newState = { ...this.state };
        newState[id] = event.target.checked;
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoice);
