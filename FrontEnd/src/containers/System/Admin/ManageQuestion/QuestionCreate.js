import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CONFIG, LANGUAGES } from '../../../../utils';
import * as actions from '../../../../store/actions';
import './QuestionCreate.scss';

class QuestionCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            types: [], subjects: [], grades: [], difficulties: [],
            type: '',
            content: '',
            choiceNumber: '4',
            subject: '',
            grade: '',
            difficulty: '',
            choice_0: false, choice_1: false, choice_2: false, choice_3: false, choice_4: false,
            answer_0: '', answer_1: '', answer_2: '', answer_3: '', answer_4: '',
        }
    }

    async componentDidMount() {
        this.props.fetchTypes();
        this.props.fetchSubjects();
        this.props.fetchGrades();
        this.props.fetchDifficulties();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.types !== this.props.types) {
            let types = this.props.types;
            this.setState({
                types: types,
                type: types && types.length > 0 ? types[0].codeKey : ''
            });
        }
        if (prevProps.subjects !== this.props.subjects) {
            let subjects = this.props.subjects;
            this.setState({
                subjects: subjects,
                subject: subjects && subjects.length > 0 ? subjects[0].codeKey : ''
            });
        }
        if (prevProps.grades !== this.props.grades) {
            let grades = this.props.grades;
            this.setState({
                grades: grades,
                grade: grades && grades.length > 0 ? grades[0].codeKey : ''
            });
        }
        if (prevProps.difficulties !== this.props.difficulties) {
            let difficulties = this.props.difficulties;
            this.setState({
                difficulties: difficulties,
                difficulty: difficulties && difficulties.length > 0 ? difficulties[0].codeKey : ''
            });
        }
    }

    render() {
        let language = this.props.language;
        let { types, subjects, grades, difficulties, type, content, choiceNumber, subject, grade, difficulty } = this.state;

        return (
            <div className='createQuestionContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='title col-12 my-3'>
                            <h1><FormattedMessage id='system.question.createQuestion' /></h1>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <label><FormattedMessage id='system.question.questionType' /></label>
                                <select className='form-control' id='type' value={type}
                                    onChange={(event) => { this.onChangeInput(event, 'type') }}>
                                    {types && types.length > 0 &&
                                        types.map((item, index) => {
                                            return (<option key={index} value={item.codeKey}>{language == LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                        })}
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <label><FormattedMessage id='system.question.subject' /></label>
                                <select className='form-control' id='subject' value={subject}
                                    onChange={(event) => { this.onChangeInput(event, 'subject') }}>
                                    {subjects && subjects.length > 0 &&
                                        subjects.map((item, index) => {
                                            return (<option key={index} value={item.codeKey}>{language == LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                        })}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id='system.question.grade' /></label>
                                <select className='form-control' id='grade' value={grade}
                                    onChange={(event) => { this.onChangeInput(event, 'grade') }}>
                                    {grades && grades.length > 0 &&
                                        grades.map((item, index) => {
                                            return (<option key={index} value={item.codeKey}>{language == LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                        })}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id='system.question.difficulty' /></label>
                                <select className='form-control' id='difficulty' value={difficulty}
                                    onChange={(event) => { this.onChangeInput(event, 'difficulty') }}>
                                    {difficulties && difficulties.length > 0 &&
                                        difficulties.map((item, index) => {
                                            return (<option key={index} value={item.codeKey}>{language == LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                        })}
                                </select>
                            </div>
                        </div>
                        <div className='type-multiple-choice col-12'>
                            <div className='col-12 my-2'>
                                <label><FormattedMessage id='system.question.question' /></label>
                                <input className='form-control' type="text" id='content' value={content}
                                    onChange={(event) => { this.onChangeInput(event, 'content') }} />
                            </div>
                            <div className='col-2'>
                                <label><FormattedMessage id='system.question.choiceNumber' /></label>
                                <input className='form-control' type="text" id='choiceNumber' value={choiceNumber}
                                    onChange={(event) => { this.onChangeInput(event, 'choiceNumber') }} />
                            </div>
                            <div className='answers col-12 my-4'>
                                <label><FormattedMessage id='system.question.correctChoice' /></label>
                                {(() => {
                                    let div = [];
                                    for (let i = 0; i < choiceNumber; i++) {
                                        div.push(
                                            <div className='col-6 my-2' key={i}>
                                                <input type="checkbox" checked={this.state[`choice_${i}`]} onChange={(event) => { this.onChangeCheckBox(event, `choice_${i}`, true) }} />
                                                <FormattedMessage id='system.question.answerPlaceHolder'>
                                                    {(msg) => <input className='answer form-control mx-4' type="text" value={this.state[`answer_${i}`]} placeholder={msg + (i + 1)} id={`answer_${i}`}
                                                        onChange={(event) => { this.onChangeInput(event, `answer_${i}`) }} />}
                                                </FormattedMessage>
                                            </div>
                                        );
                                    }
                                    return div;
                                })()}
                            </div>
                        </div>
                        <div className='col-12 mt-4'>
                            <button className='btn btn-primary' onClick={this.onClickSubmit}>
                                <FormattedMessage id='system.common.submit' />
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    onChangeInput(event, id, isArray = false) {
        let newState = { ...this.state };
        newState[id] = event.target.value;
        this.setState({
            ...newState
        })
    }

    onChangeCheckBox(event, id, isArray = false) {
        let newState = { ...this.state };
        newState[id] = event.target.checked;
        this.setState({
            ...newState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['content']
        for (let i = 0; i < this.state.choiceNumber; i++) {
            arrCheck.push(`answer_${i}`);
        }
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required');
                document.getElementById(arrCheck[i]).focus();
                break;
            }
        }
        return isValid && this.checkValidateCheckBox();
    }

    checkValidateCheckBox = () => {
        for (let i = 0; i < this.state.choiceNumber; i++) {
            if (this.state[`choice_${i}`])
                return true;
        }
        alert('Please check at least 1 correct answer');
        return false;
    }

    onClickSubmit = () => {
        let { type, content, choiceNumber, subject, grade, difficulty } = this.state;
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        let answers = [];
        let correctChoices = [];
        for (let i = 0; i < choiceNumber; i++) {
            answers[i] = this.state[`answer_${i}`];
            correctChoices[i] = this.state[`choice_${i}`];
        }

        this.props.createQuestion({
            data: {
                content: content,
                choiceNumber: choiceNumber,
                answers: answers,
            },
            correctAnswer: {
                data: correctChoices
            },
            type: type,
            subject: subject,
            grade: grade,
            difficulty: difficulty
        }, this.resetForm);
    }

    resetForm = () => {
        console.log("AAA");
        let newState = { ...this.state }
        newState.type = this.state.types[0];
        newState.content = '';
        newState.choiceNumber = CONFIG.DEFAULT_MULTIPLE_CHOICES;
        newState.subject = this.state.subjects[0];
        newState.grade = this.state.grades[0];
        newState.difficulty = this.state.difficulties[0];
        for (let i = 0; i < CONFIG.MAX_MULTIPLE_CHOICES; i++) {
            newState[`choice_${i}`] = false;
            newState[`answer_${i}`] = '';
        }

        this.setState({
            ...newState
        })
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        types: state.admin.types,
        subjects: state.admin.subjects,
        grades: state.admin.grades,
        difficulties: state.admin.difficulties,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTypes: (dataTypes) => dispatch(actions.fetchTypes(dataTypes)),
        fetchSubjects: (dataSubjects) => dispatch(actions.fetchSubjects(dataSubjects)),
        fetchGrades: (dataGrades) => dispatch(actions.fetchGrades(dataGrades)),
        fetchDifficulties: (dataDifficulties) => dispatch(actions.fetchDifficulties(dataDifficulties)),
        createQuestion: (data, successCallback) => dispatch(actions.createQuestion(data, successCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCreate);