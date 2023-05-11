import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePageHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguage } from '../../store/actions';

class HomePageHeader extends Component {

    onClickLanguage = () => {
        console.log("onClick");
        if (this.props.language == LANGUAGES.VI)
            this.props.changeLanguageA(LANGUAGES.EN)
        else
            this.props.changeLanguageA(LANGUAGES.VI)
    }

    render() {
        return (
            <div className='home-header-container col-12'>
                <div className='home-header-content col-12'>
                    <div className='left-content col-3'>
                        <div className='logo'>LOGO</div>
                    </div>
                    <div className='middle-content col-6'></div>
                    <div className='right-content col-3'>
                        <div className={'language ' + this.props.language} onClick={this.onClickLanguage}></div>
                        <div className='btn-login'><FormattedMessage id='login.login' /></div>
                        <div className='btn-sign-up'><FormattedMessage id='login.signup' /></div>
                        <div className='btn-setting'><i className="fas fa-bars"></i></div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageA: (language) => dispatch(changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageHeader);
