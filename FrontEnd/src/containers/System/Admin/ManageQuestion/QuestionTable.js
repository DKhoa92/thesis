import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import QuestionEdit from './QuestionEdit';
import './QuestionTable.scss';

class QuestionTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            isShowEdit: false,
            showEditBtn: props.showEditBtn ? props.showEditBtn : false,
            showDeleteBtn: props.showDeleteBtn ? props.showDeleteBtn : false,
            showAddGroupBtn: props.showAddGroupBtn ? props.showAddGroupBtn : false,
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
        let { questions, showEditBtn, showDeleteBtn, showAddGroupBtn } = this.state;

        return (
            <>
                <div id='question-edit' className={'question-popup-background col-12' + (this.state.isShowEdit ? '' : ' hidden')} onClick={this.onClickCloseEdit}>
                    <div className='question-edit-container container'><QuestionEdit /></div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className={((!showAddGroupBtn) ? "hidden" : "")}></th>
                            <th><FormattedMessage id='system.question.questionType' /></th>
                            <th><FormattedMessage id='system.question.subject' /></th>
                            <th><FormattedMessage id='system.question.grade' /></th>
                            <th><FormattedMessage id='system.question.question' /></th>
                            <th><FormattedMessage id='system.question.difficulty' /></th>
                            <th className={((!showEditBtn && !showDeleteBtn) ? "hidden" : "")}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions && questions.map((item, index) => {
                            let data = item && item.data ? JSON.parse(item.data) : null;
                            let correctAnswers = item && item.correctAnswer ? JSON.parse(item.correctAnswer).data : null;
                            return (
                                <tr key={index}>
                                    <td className={((!showAddGroupBtn) ? "hidden" : "")}>
                                        <button className='btn-add-group' onClick={() => { this.onClickAddGroup(item) }}>
                                            <i className="fas fa-plus-circle"></i>
                                        </button>
                                    </td>
                                    <td><FormattedMessage id={`allCode.${item.type}`} /></td>
                                    <td><FormattedMessage id={`allCode.${item.subject}`} /></td>
                                    <td><FormattedMessage id={`allCode.${item.grade}`} /></td>
                                    <td>
                                        <div className='question'>{data && data.question ? data.question : ''}</div>
                                        <div className='answers d-flex'>
                                            {(() => {
                                                let div = [];
                                                let answerCount = data && data.answers ? data.answers.length : 0;
                                                for (let i = 0; i < answerCount; i++) {
                                                    div.push(
                                                        <div className='answer' key={i}>
                                                            <input type="checkbox" checked={correctAnswers[i]} disabled />
                                                            <i>{data && data.answers ? data.answers[i] : ''}</i>
                                                        </div>
                                                    );
                                                }
                                                return div;
                                            })()}
                                        </div>
                                    </td>
                                    <td><FormattedMessage id={`allCode.${item.difficulty}`} /></td>
                                    <td className={((!showEditBtn && !showDeleteBtn) ? "hidden" : "")}>
                                        <button className={'btn-edit' + (!showEditBtn ? " hidden" : "")} onClick={() => { this.onClickEdit(item) }}>
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className={'btn-delete' + (!showDeleteBtn ? " hidden" : "")} onClick={() => { this.onClickDelete(item) }}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
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

        })
    }

    onClickCloseEdit = (event) => {
        if (!event.target.closest('.question-edit-container')) {
            this.setState({
                isShowEdit: false
            });
        }
    }

    onClickAddGroup = (question) => {
        question && this.props.addQuestion && this.props.addQuestion(question);
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
        addQuestion: (question) => dispatch(actions.addQuestion(question))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTable);