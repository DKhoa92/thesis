import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExamHeader.scss';
import { FormattedMessage } from 'react-intl';
class Exam extends Component {

    render() {
        return (
            <div className='exam-header-background col-12'>
                <div className='exam-header-container col-12 h-100'>
                    <div className='exam-header-content col-12 h-100 d-flex'>
                        <div className='left-content col-6 h-100 d-flex'>
                            <div className='exam-info h-100'>
                                <div className='exam-name h-100'>Bài thi HK toán lớp 1</div>
                            </div>
                        </div>
                        <div className='right-content col-6 h-100 d-flex'>
                            <div className='user-info h-100 d-flex'>
                                <div className='user-name h-100'>Nguyễn Đình Khoa</div>
                                <div className='user-class h-100'>Lớp 13</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
