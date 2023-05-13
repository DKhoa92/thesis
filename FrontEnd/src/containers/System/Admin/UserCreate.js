import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';

class UserCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genders: []
        }
    }

    async componentDidMount() {
        const { dispatchFetchGenderStart } = this.props;
        dispatchFetchGenderStart();
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode == 0) {
        //         this.setState({
        //             genders: res.data
        //         })
        //     }
        // } catch (error) {

        // }
    }

    render() {
        let genders = this.state.genders;
        let language = this.props.language;
        return (
            <div className='CreateUserContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 my-3'>
                            <h1><FormattedMessage id='system.createUser.createUser' /></h1>
                        </div>
                        <div className='col-12'>
                            <label><FormattedMessage id='system.createUser.userName' /></label>
                            <input className='form-control' type="text" name='userName' />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.createUser.password' /></label>
                            <input className='form-control' type="password" name='password' />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.createUser.email' /></label>
                            <input className='form-control' type="email" name='email' />
                        </div>

                        <div className='col-6'>
                            <label><FormattedMessage id='system.createUser.firstName' /></label>
                            <input className='form-control' type="text" name='firstName' />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.createUser.lastName' /></label>
                            <input className='form-control' type="text" name='lastName' />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.createUser.role' /></label>
                            <select className='form-control' name='role' />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='system.createUser.gender' /></label>
                            <select className='form-control' name='gender'>

                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        // return (<option key={index}>{language == LANGUAGES.EN ? item.valueEn : item.valueVi}</option>)
                                    })}
                            </select>
                        </div>
                        <div className='col-12'>
                            <label><FormattedMessage id='system.createUser.adress' /></label>
                            <input className='form-control' type="text" name='address' />
                        </div>
                        <div className='col-12 mt-5'>
                            <button className='btn btn-primary' type='submit' >
                                <FormattedMessage id='system.createUser.submit' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchGenderStart: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);
