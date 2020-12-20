import React from 'react';

function Footer(props) {
    return(
    <div className="footer py-5 mb-0">
        <div className="container">
            <div className="row justify-content-center text-center mb-3">             
                <div className="col-12 col-md-6  align-self-center">
                <i className="fa fa-phone fa-lg"></i>: +971 5567 3367<br/>
                <i className="fa fa-envelope"></i>: <a href="mailto:delicious@delicious.io" className="text-white">delicious@delicious.io</a>
                </div>
                <div className="col-12 col-md-6  align-self-center">
                <div className="text-center ">
                    <h6 className="follow-us">follow us</h6>
                        <a className="btn btn-social-icon  btn-google" href="#0"><i className="fa fa-google-plus fa-lg"></i></a>
                        <a className="btn btn-social-icon  btn-facebook" href="#0"><i className="fa fa-facebook fa-lg"></i></a>
                        <a className="btn btn-social-icon  btn-linkedin" href="#0"><i className="fa fa-linkedin fa-lg"></i></a>
                        <a className="btn btn-social-icon  btn-twitter" href="#0"><i className="fa fa-twitter fa-lg"></i></a>
                        <a className="btn btn-social-icon  btn-google" href="#0"><i className="fa fa-youtube fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">             
                <div className="col-auto ">
                    <p>© Copyright 2020 Delicious</p>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default Footer;