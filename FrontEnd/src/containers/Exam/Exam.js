import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExamHeader from './ExamHeader';
import './Exam.scss';
import { FormattedMessage } from 'react-intl';
class Exam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
        }
    }

    render() {
        return (
            <div className='exam-background'>
                <ExamHeader />
                <div className='exam-container'>
                    <div className='exam-content'>
                        <div className='question-section'>
                            <div className='media'></div>
                            <div className='text'>
                                {this.state.questions}
                            </div>
                        </div>
                        <div className='answer-section'>
                            <div className='answer col-auto'>
                                <div className='answer-text'>A</div>
                            </div>
                            <div className='answer col-auto'>
                                <div className='answer-text'>A</div>
                            </div>
                            <div className='answer col-auto'>
                                <div className='answer-text'>A</div>
                            </div>
                            <div className='answer col-auto'>
                                <div className='answer-text'>A</div>
                            </div>
                        </div>
                    </div>
                </div>
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
