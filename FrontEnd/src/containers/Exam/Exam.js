import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExamHeader from './ExamHeader';
import './Exam.scss';
import { FormattedMessage } from 'react-intl';
import MultipleChoice from './QuestionTemplates/MultipleChoice';
import ExamFooter from './ExamFooter';
class Exam extends Component {
    constructor(props) {
        super(props);

        // const questionTemplates = {
        //     T1: 
        // }
        this.testQuestion = {
            data: JSON.stringify({
                content: "content",
                choiceNumber: 4,
                answers: ["A", "B", "C", "D"],
            }),
            type: "type",
            subject: "subject",
            grade: "grade",
            difficulty: "difficulty"
        };
        console.log(JSON.stringify(this.testQuestion));
        this.state = {
            questions: [],
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
        return (
            <div className='exam-background'>
                <ExamHeader />
                <div className='exam-container'>
                    <MultipleChoice question={this.testQuestion} />
                </div>
                <ExamFooter questionNumber={10} />
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
