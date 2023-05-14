import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers } from '../../../services/userService';
import * as actions from '../../../store/actions';
import './UserManage.scss';
import UserCreate from './UserCreate';


class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
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
                <div className="text-center">Manage users</div>
                <div className='col-12'><UserCreate /></div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th><FormattedMessage id='system.createUser.firstName' /></th>
                                <th><FormattedMessage id='system.createUser.lastName' /></th>
                                <th><FormattedMessage id='system.createUser.userName' /></th>
                                <th><FormattedMessage id='system.createUser.email' /></th>
                                <th><FormattedMessage id='system.createUser.role' /></th>
                                <th><FormattedMessage id='system.createUser.gender' /></th>
                                <th><FormattedMessage id='system.createUser.adress' /></th>
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
                                        <td>{item.roleId}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fas fa-edit"></i></button>
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

    onClickDelete = (item) => {
        item && item.id && this.props.deleteUser && this.props.deleteUser(item.id);
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
