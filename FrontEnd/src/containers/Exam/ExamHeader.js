import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExamHeader.scss';
import { FormattedMessage } from 'react-intl';
class Exam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            examName: '',
            userFullName: '',
            classRoomName: '',
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
        let { examName, userFullName, classRoomName } = this.state
        return (
            <div className='exam-header-background col-12'>
                <div className='exam-header-container col-12 h-100'>
                    <div className='exam-header-content col-12 h-100 d-flex'>
                        <div className='left-content col-6 h-100 d-flex'>
                            <div className='exam-info h-100'>
                                <div className='exam-name h-100'>{examName}</div>
                            </div>
                        </div>
                        <div className='right-content col-6 h-100 d-flex'>
                            <div className='user-info h-100 d-flex'>
                                <div className='user-name h-100'>{userFullName}</div>
                                <div className='user-class h-100'>{classRoomName}</div>
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
        userInfo: state.user.userInfo,
        exam: state.exam.exam
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
