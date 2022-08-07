import React from 'react'

export default function Footer() {
  return (
    <>
    
    
            {/* <!-- Footer  --> */}
            <footer>
                <div class="wrapper__footer bg-theme-footer">
                    <div class="container">
                        <div class="row">
                            {/* <!-- ADDRESS --> */}
                            <div class="col-md-4">
                                <div class="widget__footer">
                                    <figure>
                                        <img src="images/logo-blue.png" alt="" class="logo-footer" />
                                    </figure>
                                    <p>
                                        Rethouse Real Estate is a premium Property template based on Bootstrap 4. Rethouse Real
                                        Estate helped thousands of clients to find the right property for their needs.

                                    </p>

                                </div>

                            </div>
                            {/* <!-- END ADDRESS --> */}

                            {/* <!-- QUICK LINKS --> */}
                            <div class="col-md-4">
                                <div class="widget__footer">
                                    <h4 class="footer-title">Our Locations</h4>
                                   
                                    <ul class="list-unstyled mb-0 mt-3">
                                        <li> <b> <i class="fa fa-map-marker"></i></b><span>214 West Arnold St. New York, NY
                                            10002</span> </li>
                                        <li> <b><i class="fa fa-phone-square"></i></b><span>(123) 345-6789</span> </li>
                                        <li> <b><i class="fa fa-phone-square"></i></b><span>(+100) 123 456 7890</span> </li>
                                    
                                    
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- END QUICK LINKS --> */}


                            {/* <!-- NEWSLETTERS --> */}
                            <div class="col-md-4">
                                <div class="widget__footer">
                                    <h4 class="footer-title">follow us </h4>
                                    <p class="mb-2">
                                        Follow us and stay in touch to get the latest news
                                    </p>
                                    <p>
                                        <button class="btn btn-social btn-social-o facebook mr-1">
                                            <i class="fa fa-facebook-f"></i>
                                        </button>
                                        <button class="btn btn-social btn-social-o twitter mr-1">
                                            <i class="fa fa-twitter"></i>
                                        </button>

                                        <button class="btn btn-social btn-social-o linkedin mr-1">
                                            <i class="fa fa-linkedin"></i>
                                        </button>
                                        <button class="btn btn-social btn-social-o instagram mr-1">
                                            <i class="fa fa-instagram"></i>
                                        </button>

                                        <button class="btn btn-social btn-social-o youtube mr-1">
                                            <i class="fa fa-youtube"></i>
                                        </button>
                                    </p>
                                    <br />
                               

                                </div>
                            </div>
                            {/* <!-- END NEWSLETTER --> */}
                        </div>
                    </div>
                </div>

                {/* <!-- Footer Bottom --> */}
                <div class="bg__footer-bottom-v1">
                    <div class="container">
                        <div class="row flex-column-reverse flex-md-row">
                            <div class="col-md-6">
                                <span>
                                    © 2022 Rethouse Real Estate - Premium real estates
                                   
                                </span>
                            </div>
                            <div class="col-md-6">
                                <ul class="list-inline ">
                                    <li class="list-inline-item">
                                        <a href="#">
                                            privacy
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="/contact">
                                            contact
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="/about">
                                            about
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            faq
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer  --> */}
            </footer>

            {/* <!-- SCROLL TO TOP --> */}
            <a href="/" id="return-to-top"><i class="fa fa-chevron-up"></i></a>

    </>
  )
}
