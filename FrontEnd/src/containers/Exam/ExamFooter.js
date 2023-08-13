import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExamFooter.scss';
import { FormattedMessage } from 'react-intl';
import * as actions from "../../store/actions";
class Exam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIdx: 0,
            showExamBtns: props.showExamBtns ? props.showExamBtns : false,
            questions: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userInfo !== this.props.userInfo) {
            this.setState({
                ...this.state,
                userFullName: this.props.userInfo.firstName + this.props.userInfo.lastName,
                classRoomName: this.props.userInfo.classRoomName,
            });
        }
        if (prevProps.exam !== this.props.exam) {
            this.setState({
                ...this.state,
                examName: this.props.exam.name,
            });
        }
        if (prevProps.questions !== this.props.questions) {
            this.setState({
                ...this.state,
                questions: this.props.questions,
            });
        }
        if (prevProps.currentIdx !== this.props.currentIdx) {
            this.setState({
                ...this.state,
                currentIdx: this.props.currentIdx,
            });
        }
    }

    render() {
        let { currentIdx, showExamBtns, questions } = this.state
        let { submitAnswers } = this.props
        return (
            <div className='exam-footer-container'>
                <div className='page col-12'>
                    {(() => {
                        let div = [];
                        for (let i = 0; i < questions.length; i++) {
                            div.push(
                                <i className={"fas fa-circle" + (currentIdx === i ? ' active' : '')} key={i}></i>
                            );
                        }
                        return div;
                    })()}
                </div>
                <div className='exam-footer-content col-12 d-flex'>

                    <div className='left-content col-6 h-100 d-flex'>
                        <div className='prev btn btn-primary' onClick={() => { this.onClickChangeQuestion(false) }}><i className="fas fa-arrow-left"></i></div>
                        <div className='page-number'>{`${questions.length > 0 ? currentIdx + 1 : '-'} / ${questions.length > 0 ? questions.length : '-'}`}</div>
                        <div className='next btn btn-primary' onClick={() => { this.onClickChangeQuestion(true) }}><i className="fas fa-arrow-right"></i></div>
                    </div>
                    <div className={'right-content col-6 h-100' + ((!showExamBtns) ? " hidden" : "")}>
                        <div className='apply btn btn-primary'><FormattedMessage id='exam.apply' /></div>
                        <div className='submit btn btn-success' onClick={submitAnswers}><FormattedMessage id='exam.submit' /></div>
                    </div>
                </div>
            </div>
        );
    }

    onClickChangeQuestion(isNext) {
        let currentIdx = this.state.currentIdx;
        let length = this.state.questions.length;
        if (length <= 1) return;
        let newIndex = (currentIdx + (isNext ? 1 : -1) + length) % length;
        this.props.changeQuestion(newIndex);
    }
}

const mapStateToProps = state => {
    return {
        currentIdx: state.questionGroup.currentQuestionIdx,
        exam: state.exam.exam,
        questions: state.questionGroup.questions,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeQuestion: (index) => dispatch(actions.changeQuestion(index)),
        submitAnswers: () => dispatch(actions.pushAnswers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
