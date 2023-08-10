import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExamHeader from './ExamHeader';
import './Exam.scss';
import ExamFooter from './ExamFooter';
import { QUESTION_TYPE } from '../../utils';
import ExamBody from './ExamBody';
import * as actions from "../../store/actions";
class Exam extends Component {
    constructor(props) {
        super(props);

        this.testQuestion = {
            data: JSON.stringify({
                question: "question",
                choiceNumber: 4,
                answers: ["A", "B", "C", "D"],
            }),
            type: QUESTION_TYPE.MULTIPLE_CHOICES,
            subject: "subject",
            grade: "grade",
            difficulty: "difficulty"
        };
        this.state = {
            questions: [this.testQuestion, this.testQuestion, this.testQuestion, this.testQuestion],
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match && match.params) {
            this.props.fetchQuestionsByGroupId(match.params.questionGroupId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.questions !== this.props.questions) {
            let questions = [];
            this.props.questions.forEach(item => {
                questions.push(JSON.parse(item.question.data))
            });
            this.setState({
                questions: questions,
            });
        };
    }

    render() {
        let { questions } = this.state;
        return (
            <div className='exam-background'>
                <ExamHeader />
                <div className='exam-container'>
                    <ExamBody questions={questions}></ExamBody>
                </div>
                <ExamFooter showExamBtns={true} questionNumber={questions ? questions.length : 0} />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        questions: state.questionGroup.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setQuestions: (questions) => dispatch(actions.setQuestions(questions)),
        fetchQuestionsByGroupId: (questionGroupId) => dispatch(actions.fetchQuestionsByGroupId(questionGroupId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
