import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExamFooter.scss';
import { FormattedMessage } from 'react-intl';
class Exam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIdx: 0,
            number: props.questionNumber ? props.questionNumber : 0,
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
    }

    render() {
        let { currentIdx } = this.state
        return (
            <div className='exam-footer-container'>
                <div className='page col-12'>
                    {(() => {
                        let div = [];
                        for (let i = 0; i < this.state.number; i++) {
                            div.push(
                                <i className={"fas fa-circle" + (currentIdx === i ? ' active' : '')} key={i}></i>
                            );
                        }
                        return div;
                    })()}
                </div>
                <div className='exam-footer-content col-12 d-flex'>

                    <div className='left-content col-6 h-100 d-flex'>
                        <div className='prev btn btn-primary'><i className="fas fa-arrow-left"></i></div>
                        <div className='next btn btn-primary'><i className="fas fa-arrow-right"></i></div>
                    </div>
                    <div className='right-content col-6 h-100 d-flex'>
                        <div className='apply btn btn-primary'><FormattedMessage id='exam.apply' /></div>
                        <div className='submit btn btn-success'><FormattedMessage id='exam.submit' /></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentIdx: state.exam.currentQuestionIdx,
        exam: state.exam.exam
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
