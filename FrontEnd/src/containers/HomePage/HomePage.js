import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageHeader from './HomePageHeader';
import { FormattedMessage } from 'react-intl';
class HomePage extends Component {

    render() {
        return (
            <>
                <HomePageHeader />
                <div><FormattedMessage id='login.login' /></div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
