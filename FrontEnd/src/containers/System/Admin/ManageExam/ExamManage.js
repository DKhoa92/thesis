import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExamManage.scss';

class ExamManage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exams: [{
                name: 'Thi Học Kỳ',
                semester: 1,
                grade: 5,
                date: '7:00 22/2/2023',
                duration: 60,
                id: 123123
            }, {}]
        }

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevProps.types !== this.props.types) {
        //     let types = this.props.types;
        //     this.setState({
        //         types: types,
        //         type: types && types.length > 0 ? types[0].codeKey : ''
        //     });
        // }
    }

    render() {
        let { exams } = this.state;
        return (
            <>
                {
                    exams && exams.map((exam, index) => {
                        return (
                            <div className="exam-item" key={index} onClick={this.onClickExamItem(exam.id)}>
                                <div className="title">{`${exam.name}`}</div>
                                <div className="info">
                                    <div className='semester'>{`Học kỳ: ${exam.semester}`}</div>
                                    <div className='grade'>{`Lớp: ${exam.grade}`}</div>
                                    <div className='date'>{`Ngày thi: ${exam.date}`}</div>
                                    <div className='duration'>{`Thời gian: ${exam.duration} phút`}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    onClickExamItem = (id) => {

    }
}


const mapStateToProps = state => {
    return {
        // language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchTypes: (dataTypes) => dispatch(actions.fetchTypes(dataTypes)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExamManage);