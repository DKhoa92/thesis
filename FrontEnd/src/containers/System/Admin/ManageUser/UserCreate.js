import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getAllCodeService } from '../../../../services/userService';
import { LANGUAGES } from '../../../../utils';
import * as actions from '../../../../store/actions';
import './UserCreate.scss';

class UserCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genders: [],
            roles: [],
            userName: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            role: '',
            gender: '',
            address: '',
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.loadDataGenders();
        this.loadDataRoles();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genders !== this.props.genders) {
            let genders = this.props.genders;
            this.setState({
                genders: genders,
                gender: genders && genders.length > 0 ? genders[0].codeKey : ''
            });
        }

        if (prevProps.roles !== this.props.roles) {
            let roles = this.props.roles;
            this.setState({
                roles: roles,
                role: roles && roles.length > 0 ? roles[0].codeKey : ''
            });
        }
    }

    render() {
        let genders = this.state.genders;
        let roles = this.state.roles;
        let language = this.props.language;
        let { userName, password, email, firstName, lastName, role, gender, address } = this.state;

        return (
            <div className='createUserContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='title col-12 my-3'>
                            <h1><FormattedMessage id='system.user.createUser' /></h1>
                        </div>
                        <div className='col-12'>
                            <label><FormattedMessage id='system.user.userName' /></label>
                            <i className='requiredField'>*</i>
                            <input className='form-control' type="text" id='userName' value={userName}
                                onChange={(event) => { this.onchangeInput(event, 'userName') }} />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.user.password' /></label>
                            <i className='requiredField'>*</i>
                            <input className='form-control' type="password" id='password' value={password}
                                onChange={(event) => { this.onchangeInput(event, 'password') }} />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.user.email' /></label>
                            <input className='form-control' type="email" id='email' value={email}
                                onChange={(event) => { this.onchangeInput(event, 'email') }} />
                        </div>

                        <div className='col-6'>
                            <label><FormattedMessage id='system.user.firstName' /></label>
                            <input className='form-control' type="text" id='firstName' value={firstName}
                                onChange={(event) => { this.onchangeInput(event, 'firstName') }} />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.user.lastName' /></label>
                            <input className='form-control' type="text" id='lastName' value={lastName}
                                onChange={(event) => { this.onchangeInput(event, 'lastName') }} />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.user.role' /></label>
                            <i className='requiredField'>*</i>
                            <select className='form-control' id='role' value={role}
                                onChange={(event) => { this.onchangeInput(event, 'role') }}>
                                {roles && roles.length > 0 &&
                                    roles.map((item, index) => {
                                        return (<option key={index} value={item.codeKey}>{language == LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                    })}
                            </select>
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.user.gender' /></label>
                            <select className='form-control' id='gender' value={gender}
                                onChange={(event) => { this.onchangeInput(event, 'gender') }}>
                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (<option key={index} value={item.codeKey}>{language == LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                    })}
                            </select>
                        </div>
                        <div className='col-12'>
                            <label><FormattedMessage id='system.user.adress' /></label>
                            <input className='form-control' type="text" id='address' value={address}
                                onChange={(event) => { this.onchangeInput(event, 'address') }} />
                        </div>
                        <div className='col-12 mt-4'>
                            <button className='btn btn-primary' onClick={this.onClickSubmit}>
                                <FormattedMessage id='system.user.submit' />
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    onchangeInput(event, id) {
        let newState = { ...this.state };
        newState[id] = event.target.value;

        this.setState({
            ...newState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['userName', 'password']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required');
                document.getElementById(arrCheck[i]).focus();
                break;
            }
        }
        return isValid;
    }

    onClickSubmit = () => {
        let { userName, password, email, firstName, lastName, role, gender, address } = this.state;
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        this.props.createUser({
            userName: userName,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
            roleId: role,
            gender: gender,
            address: address,
        }, this.resetForm);

    }

    resetForm = () => {
        let newState = { ...this.state }
        newState.userName = '';
        newState.password = '';
        newState.email = '';
        newState.firstName = '';
        newState.lastName = '';
        newState.role = this.state.role[0];;
        newState.gender = this.state.gender[0];
        newState.lastName = '';
        newState.address = '';
        this.setState({
            ...newState
        })
    }

    async loadDataGenders() {
        const { fetchGenders } = this.props;
        try {
            let res = await getAllCodeService('gender');
            if (res && res.errCode == 0) {
                fetchGenders(res.data);
            } else
                console.log("Fetch data genders error");
        } catch (error) {
            console.log(error);
        }
    }

    async loadDataRoles() {
        const { fetchRoles } = this.props;
        try {
            let res = await getAllCodeService('roles');
            if (res && res.errCode == 0) {
                fetchRoles(res.data);
            } else
                console.log("Fetch data roles error");
        } catch (error) {
            console.log(error);
        }
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        genders: state.admin.genders,
        roles: state.admin.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGenders: (dataGender) => dispatch(actions.fetchGenders(dataGender)),
        fetchRoles: (dataRoles) => dispatch(actions.fetchRoles(dataRoles)),
        fetchAllUsers: () => dispatch(actions.fetchAllUsers()),
        createUser: (data, successCallback) => dispatch(actions.createUser(data, successCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);