import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import './QuestionManage.scss';
import QuestionCreate from './QuestionCreate';
import QuestionEdit from './QuestionEdit';


class QuestionManage extends Component {

    constructor(props) {
        super(props);
        let test = {
            questionData: JSON.stringify({
                question: "aaa",
                choiceNumber: 4,
                answers: ["assd skaska dsadsd", "bsss ssss s", "csss ssss ", "dsssss ssss"],
            }),
            correctAnswer: JSON.stringify({
                data: [true, false, false, false]
            }),
            type: 'T1',
            subject: "Toan",
            grade: '1',
            difficulty: 'D1',
        }
        this.state = {
            questions: [test],
            isShowCreate: false,
            isShowEdit: false
        }
    }

    componentDidMount() {
        this.props.fetchAllQuestions();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.questions !== this.props.questions) {
            this.setState({
                questions: this.props.questions,
            });
        }
    }

    render() {
        let questions = this.state.questions;
        return (
            <div className='question-container container'>
                <div className="title text-center">
                    <h1><FormattedMessage id='system.question.questionManage' /></h1>
                </div>
                <div id='question-create' className={'question-popup-background col-12' + (this.state.isShowCreate ? '' : ' hidden')} onClick={this.onClickCloseCreate}>
                    <div className='question-create-container container'><QuestionCreate /></div>
                </div>
                <div id='question-edit' className={'question-popup-background col-12' + (this.state.isShowEdit ? '' : ' hidden')} onClick={this.onClickCloseEdit}>
                    <div className='question-edit-container container'><QuestionEdit /></div>
                </div>
                <div className='btn btn-primary' onClick={this.onClickCreate}>
                    <i className="fas fa-plus mx-2"></i><FormattedMessage id='system.question.btnCreateQuestion' />
                </div>
                <div className='question-table mt-3'>
                    <table>
                        <thead>
                            <tr>
                                <th><FormattedMessage id='system.question.questionType' /></th>
                                <th><FormattedMessage id='system.question.subject' /></th>
                                <th><FormattedMessage id='system.question.grade' /></th>
                                <th><FormattedMessage id='system.question.question' /></th>
                                <th><FormattedMessage id='system.question.difficulty' /></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions && questions.map((item, index) => {
                                let questionData = item && item.questionData ? JSON.parse(item.questionData) : null;
                                let correctAnswers = item && item.correctAnswer ? JSON.parse(item.correctAnswer).data : null;
                                console.log(correctAnswers);
                                return (
                                    <tr key={index}>
                                        <td>{item.type}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.grade}</td>
                                        <td>
                                            <div className='question'>{questionData && questionData.question ? questionData.question : ''}</div>
                                            <div className='answers d-flex'>
                                                {(() => {
                                                    let div = [];
                                                    let answerCount = questionData && questionData.answers ? questionData.answers.length : 0;
                                                    console.log(answerCount);
                                                    for (let i = 0; i < answerCount; i++) {
                                                        div.push(
                                                            <div className='answer' key={i}>
                                                                <input type="checkbox" checked={correctAnswers[i]} disabled />
                                                                <i>{questionData && questionData.answers ? questionData.answers[i] : ''}</i>
                                                            </div>
                                                        );
                                                    }
                                                    return div;
                                                })()}
                                            </div>
                                        </td>
                                        <td>{item.difficulty}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => { this.onClickEdit(item) }}><i className="fas fa-edit"></i></button>
                                            <button className='btn-delete' onClick={() => { this.onClickDelete(item) }}><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    onClickDelete = (question) => {
        question && question.id && this.props.deleteQuestion && this.props.deleteQuestion(question.id);
    }

    onClickEdit = (question) => {
        question && this.props.changeEditQuestion && this.props.changeEditQuestion(question);

        let newState = { ...this.state };
        newState.isShowEdit = true;
        this.setState({
            ...newState
        }, () => {
            console.log(this.state);
        })
    }

    onClickCreate = () => {
        let newState = { ...this.state };
        newState.isShowCreate = true;
        this.setState({
            ...newState
        }, () => {
            console.log(this.state);
        })
    }

    onClickCloseCreate = (event) => {
        if (!event.target.closest('.question-create-container')) {
            this.setState({
                isShowCreate: false
            });
        }
    }

    onClickCloseEdit = (event) => {
        if (!event.target.closest('.question-edit-container')) {
            this.setState({
                isShowEdit: false
            });
        }
    }
}

const mapStateToProps = state => {
    return {
        questions: state.admin.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllQuestions: () => dispatch(actions.fetchAllQuestions()),
        deleteQuestion: (questionId) => dispatch(actions.deleteQuestion(questionId)),
        changeEditQuestion: (question) => dispatch(actions.changeEditQuestion(question)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManage);
