import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExamHeader from './ExamHeader';
import './Exam.scss';
import { FormattedMessage } from 'react-intl';
import MultipleChoice from './QuestionTemplates/MultipleChoice';
import ExamFooter from './ExamFooter';
import { QUESTION_TYPE } from '../../utils';
import ExamBody from './ExamBody';
class Exam extends Component {
    constructor(props) {
        super(props);

        // const questionTemplates = {
        //     T1: 
        // }
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
            questions: [this.testQuestion],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userInfo !== this.props.userInfo) {
            this.setState({
                questions: this.props.questions,
            });
        };

    }

    render() {
        let { questions } = this.state;
        return (
            <div className='exam-background'>
                <ExamHeader />
                <div className='exam-container'>
                    <ExamBody></ExamBody>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
