import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';

import { PATH } from '../utils'

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Authenticate/Login';
import Header from './Header/Header';
import System from '../routes/System';
import Exam from './Exam/Exam';
import HomePage from './HomePage/HomePage';
import UserManage from './System/Admin/ManageUser/UserManage';
import ManageQuestion from './System/Admin/ManageQuestion/QuestionManage';
import CreateQuestionGroup from './System/Admin/ManageQuestionGroup/CreateQuestionGroup';
import ManageQuestionGroup from './System/Admin/ManageQuestionGroup/ManageQuestionGroup';
import TableQuestionGroup from './System/Admin/ManageQuestionGroup/TableQuestionGroup';
import HomePageHeader from './HomePage/HomePageHeader';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        {/* {this.props.isLoggedIn && <HomePageHeader />} */}
                        <Switch>
                            <Route path={PATH.HOME} exact component={HomePageHeader} />
                            <Route path={PATH.HOME_PAGE} component={HomePageHeader} />
                            <Route path={PATH.MANAGE_USER} component={HomePageHeader} />
                            <Route path={PATH.MANAGE_QUESTION} component={HomePageHeader} />
                            <Route path={PATH.CREATE_QUESTION_GROUP} component={HomePageHeader} />
                            <Route path={PATH.MANAGE_QUESTION_GROUP} component={HomePageHeader} />
                            <Route path={PATH.TABLE_QUESTION_GROUP} component={HomePageHeader} />
                        </Switch>
                        <span className="content-container">
                            <Switch>
                                <Route path={PATH.HOME} exact component={Home} />
                                <Route path={PATH.LOGIN} component={Login} />
                                <Route path={PATH.SYSTEM} component={System} />
                                <Route path={PATH.HOME_PAGE} component={HomePage} />
                                <Route path={`${PATH.EXAM}/:questionGroupId`} component={Exam} />
                                <Route path={PATH.MANAGE_USER} component={UserManage} />
                                <Route path={PATH.MANAGE_QUESTION} component={ManageQuestion} />
                                <Route path={PATH.CREATE_QUESTION_GROUP} component={CreateQuestionGroup} />
                                <Route path={PATH.MANAGE_QUESTION_GROUP} component={ManageQuestionGroup} />
                                <Route path={PATH.TABLE_QUESTION_GROUP} component={TableQuestionGroup} />
                            </Switch>
                        </span>

                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);