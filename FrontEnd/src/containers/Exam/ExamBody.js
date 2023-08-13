import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExamBody.scss';
import MultipleChoice from './QuestionTemplates/MultipleChoice';
import { QUESTION_TYPE } from '../../utils';
class ExamBody extends Component {
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
            currentIdx: 0,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentIdx !== this.props.currentIdx) {
            this.setState({
                currentIdx: this.props.currentIdx,
            });
        };
    }

    render() {
        let { questions } = this.props;
        let { currentIdx } = this.state;
        if (!questions) questions = this.defaultQuestion;

        return (
            <>
                {questions && questions.length > 0 &&
                    questions.map((item, index) => {
                        switch (item.type) {
                            case QUESTION_TYPE.MULTIPLE_CHOICES:
                                return (
                                    <div className={`question ${currentIdx == index ? '' : 'hidden'}`} key={index}>
                                        <MultipleChoice question={item} idx={index} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ExamBody);
