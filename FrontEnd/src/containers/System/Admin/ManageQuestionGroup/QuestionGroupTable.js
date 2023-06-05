import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import QuestionEdit from './QuestionEdit';
import './QuestionTable.scss';

class QuestionGroupTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questionGroups: [],
            isShowEdit: false,
            showEditBtn: props.showEditBtn ? props.showEditBtn : false,
            showDeleteBtn: props.showDeleteBtn ? props.showDeleteBtn : false,
        }
    }

    componentDidMount() {
        this.props.fetchAllQuestions();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.questionGroups !== this.props.questionGroups) {
            this.setState({
                questionGroups: this.props.questionGroups,
            });
        }
    }

    render() {
        let { questionGroups, showEditBtn, showDeleteBtn } = this.state;

        return (
            <>
                <div id='question-edit' className={'question-popup-background col-12' + (this.state.isShowEdit ? '' : ' hidden')} onClick={this.onClickCloseEdit}>
                    <div className='question-edit-container container'><QuestionEdit /></div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th><FormattedMessage id='system.questionGroup.title' /></th>
                            <th><FormattedMessage id='system.questionGroup.status' /></th>
                            <th><FormattedMessage id='system.questionGroup.approvedDate' /></th>
                            <th><FormattedMessage id='system.questionGroup.creator' /></th>
                            <th className={((!showEditBtn && !showDeleteBtn) ? "hidden" : "")}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionGroups && questionGroups.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td><FormattedMessage id={`allCode.${item.status}`} /></td>
                                    <td>{item.approvedDate}</td>
                                    <td>{item.creator}</td>
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

    onClickDelete = (item) => {
        item && item.id && this.props.deleteItem && this.props.deleteItem(item.id);
    }

    onClickEdit = (item) => {
        item && this.props.changeEditItem && this.props.changeEditItem(item);

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
}

const mapStateToProps = state => {
    return {
        questionGroups: state.questionGroup.questionGroups,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllQuestionGroups: () => dispatch(actions.fetchAllQuestionGroups()),
        deleteQuestionGroup: (questionId) => dispatch(actions.deleteQuestion(questionId)),
        changeEditQuestionGroup: (question) => dispatch(actions.changeEditQuestion(question)),
        addQuestionGroup: (question) => dispatch(actions.addQuestion(question))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManage);