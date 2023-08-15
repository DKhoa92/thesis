import React, { Component } from 'react';
import { connect } from 'react-redux';
import './nicepage.scss';
import './Test.scss';


class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {

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
        return (
            <div>
                <section className="u-align-center u-clearfix u-image u-shading u-section-1" data-image-width={256} data-image-height={256} id="sec-9c82">
                    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <h1 className="u-text u-text-default u-title u-text-1">INTUITIVE</h1>
                        <p className="u-large-text u-text u-text-default u-text-variant u-text-2">Sample text. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        <a href="#" className="u-btn u-button-style u-palette-2-base u-btn-1">Read More</a>
                    </div>
                </section>
                <section className="u-align-center u-clearfix u-section-2" id="sec-e3aa">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-shape u-shape-svg u-text-palette-4-base u-shape-1">
                            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 80" style={{}}>
                                <use xlinkHref="#svg-0b7f" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 160 80" x="0px" y="0px" id="svg-0b7f" style={{ enableBackground: 'new 0 0 160 80' }}>
                                <path d="M160,0H0c0,44.2,35.8,80,80,80S160,44.2,160,0z" />
                            </svg>
                        </div>
                        <h1 className="u-custom-font u-text u-text-body-alt-color u-text-1">Education and Learning</h1>
                        <p className="u-text u-text-body-alt-color u-text-default u-text-2">Learning is something we do almost every day</p>
                        <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
                            <div className="u-repeater u-repeater-1">
                                <div className="u-align-left u-container-style u-gradient u-list-item u-repeater-item u-list-item-1">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                                        <div className="u-align-center u-container-style u-gradient u-group u-palette-1-base u-radius-50 u-shape-round u-group-1">
                                            <div className="u-container-layout u-valign-middle u-container-layout-2">
                                                <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-3">01</h2>
                                            </div>
                                        </div>
                                        <h5 className="u-text u-text-4">Teaching</h5>
                                        <p className="u-text u-text-default u-text-5">Sample text. Click to select the text box. Click again or
                                            double click to start editing the text.</p>
                                        <a href="https://nicepage.com" className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-1">learn
                                            more</a>
                                    </div>
                                </div>
                                <div className="u-align-left u-container-style u-gradient u-list-item u-repeater-item u-list-item-2">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                                        <div className="u-align-center u-container-style u-gradient u-group u-palette-1-base u-radius-50 u-shape-round u-group-2">
                                            <div className="u-container-layout u-valign-middle u-container-layout-4">
                                                <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-default u-text-6">02</h2>
                                            </div>
                                        </div>
                                        <h5 className="u-text u-text-7">Innovations<br />
                                        </h5>
                                        <p className="u-text u-text-default u-text-8">Sample text. Click to select the text box. Click again or
                                            double click to start editing the text.</p>
                                        <a href="https://nicepage.com" className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-2">learn
                                            more</a>
                                    </div>
                                </div>
                                <div className="u-align-left u-container-style u-gradient u-list-item u-repeater-item u-list-item-3">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                                        <div className="u-align-center u-container-style u-gradient u-group u-palette-1-base u-radius-50 u-shape-round u-group-3">
                                            <div className="u-container-layout u-valign-middle u-container-layout-6">
                                                <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-default u-text-9">03</h2>
                                            </div>
                                        </div>
                                        <h5 className="u-text u-text-10">Students</h5>
                                        <p className="u-text u-text-default u-text-11">Sample text. Click to select the text box. Click again or
                                            double click to start editing the text.</p>
                                        <a href="https://nicepage.com" className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-3">learn
                                            more</a>
                                    </div>
                                </div>
                                <div className="u-align-left u-container-style u-gradient u-list-item u-repeater-item u-list-item-4">
                                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                                        <div className="u-align-center u-container-style u-gradient u-group u-palette-1-base u-radius-50 u-shape-round u-group-4">
                                            <div className="u-container-layout u-valign-middle u-container-layout-8">
                                                <h2 className="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-default u-text-12">04
                                                </h2>
                                            </div>
                                        </div>
                                        <h5 className="u-text u-text-13">Resources</h5>
                                        <p className="u-text u-text-default u-text-14">Sample text. Click to select the text box. Click again or
                                            double click to start editing the text.</p>
                                        <a href="https://nicepage.com" className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-body-color u-btn-4">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-clearfix u-section-3" id="sec-f5bd">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width={400} data-image-height={265}>
                                        <div className="u-container-layout u-valign-top u-container-layout-1" />
                                    </div>
                                    <div className="u-container-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                                        <div className="u-container-layout u-valign-middle u-container-layout-2">
                                            <h2 className="u-align-center u-text u-text-default u-text-1">Sample Headline</h2>
                                            <p className="u-align-center u-text u-text-default u-text-2">Sample text. Click to select the Text
                                                Element.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-backlink u-clearfix u-grey-80">
                    <a className="u-link" href="website-templates" target="_blank">
                        <span>Free Website Templates</span>
                    </a>
                    <p className="u-text">
                        <span>created with</span>
                    </p>
                    <a className="u-link" target="_blank">
                        <span>Website Builder Software</span>
                    </a>.
                </section>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);