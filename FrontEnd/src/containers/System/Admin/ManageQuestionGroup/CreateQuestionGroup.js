import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CONFIG, LANGUAGES } from '../../../../utils';
import * as actions from '../../../../store/actions';
import './CreateQuestionGroup.scss';
import ExamBody from '../../../Exam/ExamBody';
import ExamFooter from '../../../Exam/ExamFooter';
import QuestionTable from '../ManageQuestion/QuestionTable';

class CreateQuestionGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
        }
    }

    async componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let language = this.props.language;
        let { title } = this.state;

        return (
            <div className='createQuestionGroupContainer'>
                <div className='container'>

                    <div className='title col-12'>
                        <h1><FormattedMessage id='system.questionGroup.createQuestionGroup' /></h1>
                    </div>

                    <div className='col-12 my-2'>
                        <label><FormattedMessage id='system.questionGroup.questionGroupName' /></label>
                        <input className='form-control' type="text" id='title' value={title}
                            onChange={(event) => { this.onChangeInput(event, 'title') }} />
                    </div>
                    <div className='show-questions'>
                        <div className='exam-body'><ExamBody /></div>
                        <div className='exam-footer'><ExamFooter /></div>
                    </div>
                    <div className='question-table'><QuestionTable showAddGroupBtn={true}></QuestionTable></div>

                    <div className='col-12 mt-4'>
                        <button className='btn btn-primary' onClick={this.onClickSubmit}>
                            <FormattedMessage id='system.common.submit' />
                        </button>
                    </div>
                </div>
            </div >
        );
    }

    onChangeInput(event, id) {
        let newState = { ...this.state };
        newState[id] = event.target.value;
        this.setState({
            ...newState
        })
    }



    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['title'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required');
                document.getElementById(arrCheck[i]).focus();
                break;
            }
        }
        return isValid && this.props.questions.length > 0;
    }

    onClickSubmit = () => {
        let { title } = this.state;
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        this.props.createQuestionGroup({
            title: title,
            creatorId: this.props.userInfo.id
        }, (questionGroupId) => {
            this.props.questions.forEach(question => {
                this.props.createQuestionUsing({
                    questionGroupId: questionGroupId,
                    questionId: question.id,
                })
            });
            this.resetForm();
        });
    }

    resetForm = () => {
        let newState = { ...this.state }
        newState.title = '';
        this.props.setQuestions([]);
        this.setState({
            ...newState
        })
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        questions: state.questionGroup.questions,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setQuestions: (questions) => dispatch(actions.setQuestions(questions)),
        createQuestionGroup: (data, successCallback) => dispatch(actions.createQuestionGroup(data, successCallback)),
        createQuestionUsing: (data) => dispatch(actions.createQuestionUsing(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionGroup);