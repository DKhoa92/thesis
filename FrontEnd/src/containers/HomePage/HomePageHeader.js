import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePageHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguage } from '../../store/actions';
import { PATH } from '../../utils';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import { withRouter } from 'react-router';

class HomePageHeader extends Component {

    onClickLanguage = () => {
        if (this.props.language === LANGUAGES.VI)
            this.props.changeLanguageA(LANGUAGES.EN)
        else
            this.props.changeLanguageA(LANGUAGES.VI)
    }

    onClickLogin = () => {
        this.props.history.push(PATH.LOGIN);
    }

    render() {
        const { language, isLoggedIn, userInfo } = this.props;
        return (
            <div className='home-header-container col-12'>
                <div className='home-header-content col-12'>
                    <div className='left-content col-3'>
                        <div className='logo'>LOGO</div>
                    </div>
                    <div className='middle-content col-5'></div>
                    <div className='right-content col-4'>
                        <div className={'language ' + (language ? language : LANGUAGES.VI)} onClick={this.onClickLanguage}></div>
                        <div className=''></div>
                        <div className={'login' + (isLoggedIn ? ' hide' : '')}>
                            <div className='btn-login' onClick={this.onClickLogin}><FormattedMessage id='homeHeader.login' /></div>
                            <div className='btn-sign-up'><FormattedMessage id='homeHeader.signup' /></div>
                        </div>
                        <div className={'user-info' + (isLoggedIn ? '' : ' hide')}>
                            <div className='welcome'>{userInfo && userInfo.firstName ? userInfo.firstName : ''}</div>
                            <div className='btn-setting'><i className="fas fa-bars"></i></div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageA: (language) => dispatch(changeLanguage(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePageHeader));
