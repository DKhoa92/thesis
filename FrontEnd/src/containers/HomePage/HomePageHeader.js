import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePageHeader extends Component {

    render() {
        return (
            <>BACKS</>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePageHeader);
