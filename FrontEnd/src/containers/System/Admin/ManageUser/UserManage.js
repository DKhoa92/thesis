import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers } from '../../../../services/userService';
import * as actions from '../../../../store/actions';
import './UserManage.scss';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';


class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isShowCreate: false,
            isShowEdit: false
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users !== this.props.users) {
            this.setState({
                users: this.props.users,
            });
        }
    }

    render() {
        let users = this.state.users;
        return (
            <div className='user-container container'>
                <div className="title text-center">
                    <h1><FormattedMessage id='system.user.userManage' /></h1>
                </div>
                <div id='user-create' className={'user-popup-background col-12' + (this.state.isShowCreate ? '' : ' hidden')} onClick={this.onClickCloseCreate}>
                    <div className='user-create-container container'><UserCreate /></div>
                </div>
                <div id='user-edit' className={'user-popup-background col-12' + (this.state.isShowEdit ? '' : ' hidden')} onClick={this.onClickCloseEdit}>
                    <div className='user-edit-container container'><UserEdit /></div>
                </div>
                <div className='btn btn-primary' onClick={this.onClickCreate}>
                    <i className="fas fa-plus mx-2"></i><FormattedMessage id='system.user.btnCreateUser' />
                </div>
                <div className='user-table mt-3'>
                    <table id='customers'>
                        <thead>
                            <tr>
                                <th><FormattedMessage id='system.user.firstName' /></th>
                                <th><FormattedMessage id='system.user.lastName' /></th>
                                <th><FormattedMessage id='system.user.userName' /></th>
                                <th><FormattedMessage id='system.user.email' /></th>
                                <th><FormattedMessage id='system.user.role' /></th>
                                <th><FormattedMessage id='system.user.gender' /></th>
                                <th><FormattedMessage id='system.user.adress' /></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.email}</td>
                                        <td><FormattedMessage id={`allCode.${item.role}`} /></td>
                                        <td><FormattedMessage id={`allCode.${item.gender}`} /></td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => { this.onClickEdit(item) }}><i className="fas fa-edit"></i></button>
                                            <button className='btn-delete' onClick={() => { this.onClickDelete(item) }}><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    onClickDelete = (user) => {
        user && user.id && this.props.deleteUser && this.props.deleteUser(user.id);
    }

    onClickEdit = (user) => {
        user && this.props.changeEditUser && this.props.changeEditUser(user);

        let newState = { ...this.state };
        newState.isShowEdit = true;
        this.setState({
            ...newState
        }, () => {

        })
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
        if (!event.target.closest('.user-create-container')) {
            this.setState({
                isShowCreate: false
            });
        }
    }

    onClickCloseEdit = (event) => {
        if (!event.target.closest('.user-edit-container')) {
            this.setState({
                isShowEdit: false
            });
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(actions.fetchAllUsers()),
        deleteUser: (userId) => dispatch(actions.deleteUser(userId)),
        changeEditUser: (user) => dispatch(actions.changeEditUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
