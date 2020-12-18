import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div class="footer py-5 mb-0">
        <div class="container">
            <div class="row justify-content-center text-center mb-3">             
                <div class="col-12 col-md-6  align-self-center">
                <i class="fa fa-phone fa-lg"></i>: +971 5567 3367<br/>
                <i class="fa fa-envelope"></i>: <a href="mailto:delicious@delicious.io" class="text-white">delicious@delicious.io</a>
                </div>
                <div class="col-12 col-md-6  align-self-center">
                <div class="text-center ">
                    <h6 class="follow-us">follow us</h6>
                        <a class="btn btn-social-icon  btn-google" href="#0"><i class="fa fa-google-plus fa-lg"></i></a>
                        <a class="btn btn-social-icon  btn-facebook" href="#0"><i class="fa fa-facebook fa-lg"></i></a>
                        <a class="btn btn-social-icon  btn-linkedin" href="#0"><i class="fa fa-linkedin fa-lg"></i></a>
                        <a class="btn btn-social-icon  btn-twitter" href="#0"><i class="fa fa-twitter fa-lg"></i></a>
                        <a class="btn btn-social-icon  btn-google" href="#0"><i class="fa fa-youtube fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-2">             
                <div class="col-auto ">
                    <p>© Copyright 2020 Delicious</p>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default Footer;