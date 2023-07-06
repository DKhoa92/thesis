import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import CreateQuestionGroup from './CreateQuestionGroup';
import TableQuestionGroup from './TableQuestionGroup';
import './ManageQuestionGroup.scss';

class ManageQuestionGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowCreate: false,
        }
    }

    render() {
        let questionGroups = this.state.questionGroups;
        return (
            <div className='question-group-container container'>
                <div className="title text-center">
                    <h1><FormattedMessage id='system.questionGroup.manageQuestionGroup' /></h1>
                </div>
                <div id='question-group-create' className={'question-group-popup-background col-12' + (this.state.isShowCreate ? '' : ' hidden')} onClick={this.onClickCloseCreate}>
                    <div className='question-group-create-container container'><CreateQuestionGroup /></div>
                </div>
                <div className='btn btn-primary' onClick={this.onClickCreate}>
                    <i className="fas fa-plus mx-2"></i><FormattedMessage id='system.questionGroup.btnCreateQuestionGroup' />
                </div>
                <div className='question-group-table mt-3'>
                    <TableQuestionGroup showEditBtn={true} showDeleteBtn={true}></TableQuestionGroup>
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
        if (!event.target.closest('.question-group-create-container')) {
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
        fetchAllQuestionGroups: () => dispatch(actions.fetchAllQuestionGroups()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageQuestionGroup);