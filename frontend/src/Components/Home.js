import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../Admin/redux/adSlice";
import { Link } from "react-router-dom";



const Home = () => {


    const dispatch = useDispatch();
    const ads = useSelector(state => state.ad.ads);

    useEffect(() => {
        dispatch(getAds());

    }, [dispatch]);
    console.log("title", ads);

    const allads = ads.slice(0, 3).map(ad => {
        return (
            <>
                     

                     
                                    <div class="col-md-4 col-lg-4">
                                        <div class="card__image card__box-v1">
                                            <div class="card__image-header h-250">
                                                <div class="ribbon text-capitalize">featured</div>
                                                <Link to={"list/SingleDetail/" + ad.id}>
                                                <img src={'http://127.0.0.1:8000/image/'+ad.image} alt="" class="img-fluid w100 img-transition" />
                                                </Link>
                                           
                                            </div>
                                            <div class="card__image-body">
                                                <span class="badge badge-primary text-capitalize mb-2">{ad.type}</span>
                                                <h6 class="text-capitalize">
                                                  {ad.title}
                                                </h6>

                                                <p class="text-capitalize">
                                                    <i class="fa fa-map-marker"></i>
                                                    {ad.location}
                                                </p>
                                                <ul class="list-inline card__content">
                                                    <li class="list-inline-item">

                                                        <span>
                                                            baths <br />
                                                            <i class="fa fa-bath"></i> 2
                                                        </span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span>
                                                            beds <br />
                                                            <i class="fa fa-bed"></i> 3
                                                        </span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span>
                                                            rooms <br />
                                                            <i class="fa fa-inbox"></i> 3
                                                        </span>
                                                    </li>
                                                   <li class="list-inline-item">
                                                        <span>
                                                            area <br />
                                                            <i class="fa fa-map"></i> 4300 sq ft
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div class="card__image-footer">
                                                <figure>
                                                    <img src="images/80x80.jpg" alt="" class="img-fluid rounded-circle" />
                                                </figure>
                                                <ul class="list-inline my-auto">
                                                    <li class="list-inline-item ">
                                                        <a href="#">
                                                            tom wilson
                                                        </a>

                                                    </li>

                                                </ul>
                                                <ul class="list-inline my-auto ml-auto">
                                                    <li class="list-inline-item">

                                                        <h6>$350.000</h6>
                                                    </li>

                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>



                             

                             



                               
                               
                               
                    


            </>)

    });

    return (

        <>


            {/* <!-- CAROUSEL --> */}
            <div class="slider-container">
                <div class="container-slider-image-full  ">
                    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators d-none">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active banner-max-height">
                                <img class="d-block w-100" src="images/bg15.jpg" alt="First slide" />
                                <div class="carousel-caption banner__slide-overlay d-flex h-100">
                                    <div class="carousel__content">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8 col-md-12 col-sm-12 text-center">
                                                    <div class="slider__content-title ">
                                                        <h2 data-animation="fadeInDown" data-delay=".2s" data-duration="1000ms"
                                                            class="text-white animated fadeInDown">
                                                          Let’s find a home that’s perfect for you.</h2>
                                                        <p data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms"
                                                            class="text-white animated fadeInUp">

Let’s find the right selling option for you
Get your home’s value and see selling options


                                                        </p>
                                                        <a href="/list" data-animation="fadeInUp" data-delay=".6s"
                                                            data-duration="1000ms"
                                                            class="btn btn-primary text-uppercase animated fadeInUp">
                                                            Start Exploring
                                                            <i class="fa fa-angle-right arrow-btn "></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item banner-max-height">
                                <img class="d-block w-100" src="images/bg.jpg" alt="Second slide" />
                                <div class="carousel-caption banner__slide-overlay d-flex h-100">
                                    <div class="carousel__content">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8 col-md-12 col-sm-12 text-center">
                                                    <div class="slider__content-title ">
                                                        <h2 data-animation="animated fadeInDown"
                                                            class="text-white animated fadeInDown">
                                                           Get the best real estate deals first!</h2>
                                                        <p data-animation="animated fadeInUp"
                                                            class="text-white animated fadeInUp ">
Let’s find the right selling option for you
Get your home’s value and see selling options
                                                        </p>
                                                        <a href="/list" class="btn btn-primary text-uppercase animated fadeInUp">
                                                            properties
                                                            <i class="fa fa-angle-right arrow-btn "></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item banner-max-height">
                                <img class="d-block w-100" src="images/bg19.jpg" alt="Third slide" />
                                <div class="carousel-caption banner__slide-overlay d-flex h-100">
                                    <div class="carousel__content">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8 col-md-12 col-sm-12 text-center">
                                                    <div class="slider__content-title ">
                                                        <h2 data-animation="animated fadeInDown"
                                                            class="text-white animated fadeInDown">
                                                          Find homes first.
                                                          Tour homes fast.</h2>
                                                        <p data-animation="animated fadeInUp"
                                                            class="text-white animated fadeInUp ">
Let’s find the right selling option for you
Get your home’s value and see selling options
                                                         
                                                        </p>
                                                        <a href="/contact" class="btn btn-primary text-uppercase animated fadeInUp">
                                                            contact us
                                                            <i class="fa fa-angle-right arrow-btn "></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="sr-only">Previous</span>
                        <span class="carousel-control-nav-prev">
                            <i class="fa fa-2x fa-angle-left"></i>
                        </span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="sr-only">Next</span>
                        <span class="carousel-control-nav-next">
                            <i class="fa fa-2x fa-angle-right"></i>
                        </span>
                    </a>
                </div>
            </div>

            <div class="clearfix"></div>
            {/* <!-- END CAROUSEL --> */}
            <div class="clearfix"></div>


            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6 mx-auto">
                            <div class="title__head">
                                <h2 class="text-center text-capitalize">
                                    featured properties
                                </h2>
                                <p class="text-center text-capitalize">handpicked exclusive properties by our team.</p>

                            </div>
                        </div>
                    </div>

                    {/* <!--=========================================
=            Section Gallery two            =
==========================================--> */}
                    <div class="card__image-filter">
                        <div class="filterizr-control">
                            <ul class="list-inline filterizr-filter">
                                <a href="/list">
                                <li class="list-inline-item filtr-active btn-filter" data-filter="all">All Properties</li>
                                </a>

                            </ul>
                        </div>
                        <div class="tab-content" id="myTabContent">
                         
                            <div class="tab-pane fade show active" id="pills-tab-two" role="tabpanel" aria-labelledby="pills-tab-two">
                 <div className="row">

                                  {allads}
                                  </div>
                        </div>
                    </div>
                   
                </div>
                </div>
            </section>


            {/* <!-- MOST POPULAR PLACES --> */}
            <section class="wrap__heading bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6 mx-auto">
                            <div class="title__head">
                                <h2 class="text-center text-capitalize">
                                    most popular places
                                </h2>
                                <p class="text-center text-capitalize">find properties in these cities.</p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-xl-5 col-padd">
                            {/* <!-- CARD IMAGE --> */}

                            <a href="/list">
                                <div class="card__image-hover-style-v3">
                                    <div class="card__image-hover-style-v3-thumb h-475">
                                        <img src="images/amman.jpg" alt="" class="img-fluid w-100" />
                                    </div>
                                    <div class="overlay">
                                        <div class="desc">
                                            <h6 class="text-capitalize">Amman</h6>
                                            <p class="text-capitalize">70 properties</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-7 col-xl-7">
                            <div class="row">
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="/list">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/irbid.jpg" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Irbid</h6>
                                                    <p class="text-capitalize">52 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="/list">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/jerash.jpg" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Jerash</h6>
                                                    <p class="text-capitalize">46 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="/list">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/madaba.jpg" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Madaba</h6>
                                                    <p class="text-capitalize">23 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-padd">
                                    {/* <!-- CARD IMAGE --> */}
                                    <a href="/list">
                                        <div class="card__image-hover-style-v3">
                                            <div class="card__image-hover-style-v3-thumb h-230">
                                                <img src="images/aqaba.png" alt="" class="img-fluid w-100" />
                                            </div>
                                            <div class="overlay">
                                                <div class="desc">
                                                    <h6 class="text-capitalize">Aqaba</h6>
                                                    <p class="text-capitalize">50 properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END MOST POPULAR PLACES -->



    <!-- VIDEO --> */}
            <section class="home__video bg-theme-v6">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 mx-auto">
                            <div class="home__video-area text-center">
                                
                                <h2 class="text-white">The #1 Place For Commercial Property</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END VIDEO -->


    <!-- BRAND PARTNER --> */}
            <section class="projects__partner bg-light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6">
                            <div class="title__head">
                                <h2 class="text-center text-capitalize">our partners</h2>
                                <p class="text-center text-capitalize">Brand Partners Successful Projects Trusted Many Clients
                                    Real Estate</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="projects__partner-logo">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo6.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo7.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo8.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo1.png" alt="" class="img-fluid" />
                                    </li>
                                    <li class="list-inline-item">
                                        <img src="images/partner-logo5.png" alt="" class="img-fluid" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END BRAND PARTNER --> */}




            {/* 
    <!-- About --> */}
             <section class="home__about bg-theme-v4">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="title__leading">
                        <h6 class="text-uppercase">trusted By thousands</h6> 
                        <h2 class="text-capitalize"> why choose use?</h2>
                        <p>
                            The first step in selling your property is to get a valuation from local experts. They will
                            inspect your home and take into account its unique features, the area and market conditions
                            before providing you with the most accurate valuation.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla
                            quae alias tempora. Placeat voluptatem eum numquam quas distinctio obcaecati quaerat,
                            repudiandae qui! Quia, omnis, doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quod libero amet, laborum qui nullas tempora.</p>

                        <a href="/about" class="btn btn-primary mt-3 text-capitalize"> read more
                            <i class="fa fa-angle-right ml-3 "></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
            {/* <!-- END BLOG --> */}

            {/* <!-- CALL TO ACTION --> */}
            <section class="cta-v1 py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-9">
                            <h2 class="text-uppercase text-white">Looking For A Property To Buy Or Rent?</h2>
                            <p class="text-capitalize text-white">We Will Assist You In The Best And Comfortable Property
                                Services
                                For You
                            </p>

                        </div>
                        <div class="col-lg-3">
                            <a href="/list" class="btn btn-light text-uppercase ">Check Them Out
                                <i class="fa fa-angle-right ml-3 arrow-btn "></i></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END CALL TO ACTION --> */}

        </>
    )
}
export default Home