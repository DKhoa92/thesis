import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import './QuestionManage.scss';
import QuestionCreate from './QuestionCreate';
import QuestionTable from './QuestionTable';


class QuestionManage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowCreate: false,
        }
    }

    render() {
        let questions = this.state.questions;
        return (
            <div className='question-container container'>
                <div className="title text-center">
                    <h1><FormattedMessage id='system.question.questionManage' /></h1>
                </div>
                <div id='question-create' className={'question-popup-background col-12' + (this.state.isShowCreate ? '' : ' hidden')} onClick={this.onClickCloseCreate}>
                    <div className='question-create-container container'><QuestionCreate /></div>
                </div>
                <div className='btn btn-primary' onClick={this.onClickCreate}>
                    <i className="fas fa-plus mx-2"></i><FormattedMessage id='system.question.btnCreateQuestion' />
                </div>
                <div className='question-table mt-3'>
                    <QuestionTable showEditBtn={true} showDeleteBtn={true}></QuestionTable>
                </div>
            </div>
        );
    }

    onClickCreate = () => {
        let newState = { ...this.state };
        newState.isShowCreate = true;
        this.setState({
            ...newState
        }, () => {

        })
    }

    onClickCloseCreate = (event) => {
        if (!event.target.closest('.question-create-container')) {
            this.setState({
                isShowCreate: false
            });
        }
    }


}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllQuestions: () => dispatch(actions.fetchAllQuestions()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManage);
