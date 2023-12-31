import React from 'react';import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Opt2 = () => {
    return (
        <>
            <div className="authincation section-padding">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-xl-5 col-md-6">
                        <div className="alert alert-success  fade show d-flex justify-content-between" role="alert">
                            <span>Please enter verification token from your device</span>
                            <span className="c-pointer" data-dismiss="alert">
                                <i className="icofont-close-line"></i>
                            </span>
                        </div>
                        <div className="mini-logo text-center my-3">
                            <Link to={"/intro"}><img src={logo} alt="" /></Link>
                            <h4 className="card-title mt-3">2-Step Verification</h4>
                        </div>
                        <div className="auth-form card">
                            <div className="card-body">
                                <p className="text-center mb-3">Enter the verification code generated by your phone ending
                                    in +xxx xxxxxxxx60.</p>
                                <form className="row g-3">
                                    <div className="col-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text py-3">
                                                    <i className="icofont-ui-touch-phone"></i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="verification code"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-center">
                                        <Link to={'/'} className="btn btn-primary btn-block">Send</Link>
                                    </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check form-switch">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" for="exampleCheck1">
                                                <small>Don't ask me for the code again for 30 days when I use this
                                                    computer.</small>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                                <div className="new-account mt-3">
                                    <p>Don't get code? <Link className="text-primary" to={"/otp-1"}>Resend</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Opt2;