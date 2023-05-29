import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
import { withRouter } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            userName: 'ndk@yh.com',
            password: '123456',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeInput = (event, inputField) => {
        this.setState({
            userName: inputField === 'userName' ? event.target.value : this.state.userName,
            password: inputField === 'password' ? event.target.value : this.state.password,
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: '',
        })
        try {
            let data = await handleLoginApi(this.state.userName, this.state.password);
            if (data) {
                if (data.errCode !== 0) {
                    this.setState({
                        errMessage: data.message,
                    });
                } else {
                    this.props.userLoginSuccess(data.user);
                }
            }
        } catch (error) {
            if (error.response) {
                this.setState({
                    errMessage: error.response.data.message,
                })
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='col-12 text-center login-text'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.userName}
                                onChange={(event) => this.handleOnChangeInput(event, 'userName')}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='password-input-container'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                />
                                <span onClick={this.handleShowHidePassword}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={this.handleLogin}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
