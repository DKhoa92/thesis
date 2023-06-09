import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CONFIG, LANGUAGES } from '../../../../utils';
import * as actions from '../../../../store/actions';
import './QuestionCreate.scss';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-classic-mathtype";

class QuestionCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: '',
            types: [], subjects: [], grades: [], difficulties: [],
            type: '',
            choiceNumber: '4',
            subject: '',
            grade: '',
            difficulty: '',
            choice_0: false, choice_1: false, choice_2: false, choice_3: false, choice_4: false,
            answer_0: '', answer_1: '', answer_2: '', answer_3: '', answer_4: '',
            focus: 'question',
        }
        this.editorList = [];
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
        let { types, subjects, grades, difficulties, type, choiceNumber, subject, grade, difficulty, question } = this.state;

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
                                            return (<option key={index} value={item.codeKey}>{language === LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
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
                                            return (<option key={index} value={item.codeKey}>{language === LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                        })}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id='system.question.grade' /></label>
                                <select className='form-control' id='grade' value={grade}
                                    onChange={(event) => { this.onChangeInput(event, 'grade') }}>
                                    {grades && grades.length > 0 &&
                                        grades.map((item, index) => {
                                            return (<option key={index} value={item.codeKey}>{language === LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                        })}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id='system.question.difficulty' /></label>
                                <select className='form-control' id='difficulty' value={difficulty}
                                    onChange={(event) => { this.onChangeInput(event, 'difficulty') }}>
                                    {difficulties && difficulties.length > 0 &&
                                        difficulties.map((item, index) => {
                                            return (<option key={index} value={item.codeKey}>{language === LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                        })}
                                </select>
                            </div>
                        </div>
                        <div className='type-multiple-choice col-12'>
                            <div className='col-12 my-2'>
                                <label><FormattedMessage id='system.question.question' /></label>
                                <div id='question'>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{
                                            toolbar: {
                                                shouldNotGroupWhenFull: true,
                                                items: [
                                                    "alignment",
                                                    'bold',
                                                    "italic",
                                                    'underline',
                                                    'strikethrough', '|',
                                                    'bulletedList',
                                                    'numberedList',
                                                    'outdent',
                                                    'indent', '|',
                                                    "insertTable", '|',
                                                    "MathType",
                                                    "ChemType", '|',
                                                ]
                                            }
                                        }}
                                        data={question}
                                        onReady={(editor) => {
                                            this.onEditorReady(editor, 'question', false)
                                        }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            this.onEditorStateChange(data, 'question');
                                        }}
                                        onFocus={(event, editor) => {
                                            this.onEditorFocus(event, editor, 'question')
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='col-2'>
                                <label><FormattedMessage id='system.question.choiceNumber' /></label>
                                <input className='form-control' type="text" id='choiceNumber' value={choiceNumber}
                                    onChange={(event) => { this.onChangeInput(event, 'choiceNumber') }} />
                            </div>
                            <label className='mt-4'><FormattedMessage id='system.question.correctChoice' /></label>
                            <div className='answers col-12 row'>

                                {(() => {
                                    let div = [];
                                    for (let i = 0; i < choiceNumber; i++) {
                                        div.push(
                                            <div className='col-6 my-2 d-flex' key={i}>
                                                <input type="checkbox" checked={this.state[`choice_${i}`]} onChange={(event) => { this.onChangeCheckBox(event, `choice_${i}`, true) }} />
                                                <FormattedMessage id='system.question.answerPlaceHolder'>
                                                    {(msg) =>
                                                        // <input className='answer form-control mx-4' type="text" value={this.state[`answer_${i}`]} placeholder={msg + (i + 1)} id={`answer_${i}`}
                                                        //     onChange={(event) => { this.onChangeInput(event, `answer_${i}`) }} />
                                                        <div className='answer' id={`answer_${i}`}>
                                                            <CKEditor
                                                                editor={ClassicEditor}
                                                                config={{
                                                                    toolbar: {
                                                                        shouldNotGroupWhenFull: true,
                                                                        items: [
                                                                            "alignment",
                                                                            'bold',
                                                                            "italic",
                                                                            'underline',
                                                                            'strikethrough', '|',
                                                                            'bulletedList',
                                                                            'numberedList',
                                                                            'outdent',
                                                                            'indent', '|',
                                                                            "insertTable", '|',
                                                                            "MathType",
                                                                            "ChemType", '|',
                                                                        ]
                                                                    },
                                                                    placeholder: `${msg + (i + 1)}`,
                                                                }}
                                                                data={this.state[`answer_${i}`]}
                                                                onReady={(editor) => {
                                                                    this.onEditorReady(editor, `answer_${i}`)
                                                                }}
                                                                onChange={(event, editor) => {
                                                                    const data = editor.getData();
                                                                    this.onEditorStateChange(data, `answer_${i}`);
                                                                }}
                                                                onFocus={(event, editor) => {
                                                                    this.onEditorFocus(event, editor, `answer_${i}`)
                                                                }}
                                                            />
                                                        </div>
                                                    }
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
            </div>
        );
    }

    onEditorReady = (editor, id, hidden = true) => {
        let toolbar = document.getElementById(id).getElementsByClassName('ck-editor__top')[0] ? document.getElementById(id).getElementsByClassName('ck-editor__top')[0] : null;

        if (hidden) toolbar.classList.add('hidden');
        if (!this.editorList.includes(toolbar)) {
            toolbar.id = id + '-toolbar';
            this.editorList.push(toolbar);
        }
    }

    onEditorFocus = (event, editor, id) => {
        this.editorList.forEach(element => {
            if (element.id == `${id}-toolbar`)
                element.classList.remove('hidden');
            else
                element.classList.add('hidden');
        });
    }

    onEditorBlur = (event, editor, id) => {
        document.getElementById(id).getElementsByClassName('ck-editor__top')[0].classList.add('hidden');
    }

    onEditorStateChange = (newValue, id) => {
        let newState = { ...this.state };
        newState[id] = newValue;
        this.setState({
            ...newState,
        }, () => { console.log(this.state.question); });
    }

    onChangeInput = (event, id) => {
        let newState = { ...this.state };
        newState[id] = event.target.value;
        this.setState({
            ...newState
        })
    }

    onChangeCheckBox = (event, id) => {
        let newState = { ...this.state };
        newState[id] = event.target.checked;
        this.setState({
            ...newState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['question']
        for (let i = 0; i < this.state.choiceNumber; i++) {
            arrCheck.push(`answer_${i}`);
        }
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required');
                document.getElementById(arrCheck[i]).getElementsByClassName('ck-content')[0].focus();

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
        let { type, question, choiceNumber, subject, grade, difficulty } = this.state;

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
                question: question,
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
        let newState = { ...this.state }
        newState.type = this.state.types[0].codeKey;
        newState.question = '';
        newState.choiceNumber = CONFIG.DEFAULT_MULTIPLE_CHOICES;
        newState.subject = this.state.subjects[0].codeKey;
        newState.grade = this.state.grades[0].codeKey;
        newState.difficulty = this.state.difficulties[0].codeKey;
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