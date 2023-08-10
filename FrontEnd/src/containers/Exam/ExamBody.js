import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExamHeader from './ExamHeader';
import './ExamBody.scss';
import { FormattedMessage } from 'react-intl';
import MultipleChoice from './QuestionTemplates/MultipleChoice';
import { QUESTION_TYPE } from '../../utils';
class Exam extends Component {
    constructor(props) {
        super(props);

        this.defaultQuestion = {
            data: JSON.stringify({
                question: "Question",
                choiceNumber: 4,
                answers: ["A", "B", "C", "D"],
            }),
            type: QUESTION_TYPE.MULTIPLE_CHOICES,
        };
        this.state = {
            questions: this.props.questions ? this.props.questions : this.defaultQuestion,
            currentIdx: 0,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.questions !== this.props.questions) {
            this.setState({
                questions: this.props.questions,
            });
        };
        if (prevProps.currentIdx !== this.props.currentIdx) {
            this.setState({
                currentIdx: this.props.currentIdx,
            });
        };
    }

    render() {
        let { questions, currentIdx } = this.state;
        return (
            <>
                {questions && questions.length > 0 &&
                    questions.map((item, index) => {
                        switch (item.question.type) {
                            case QUESTION_TYPE.MULTIPLE_CHOICES:
                                return (
                                    <div className={`question ${currentIdx == index ? '' : 'hidden'}`} key={index}>
                                        <MultipleChoice question={item.question} />
                                    </div>
                                )
                            default:
                                break;
                        }
                    })}
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        questions: state.questionGroup.questions,
        currentIdx: state.questionGroup.currentQuestionIdx,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
