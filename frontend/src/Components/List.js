import { useDispatch, useSelector } from "react-redux";
import { getAds, findByTitle } from "../Admin/redux/adSlice";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const List = () => {
  const [type, setSearchType] = useState("");
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ad.ads);

  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);

  const onChangeSearchTitle = (e) => {
    const type = e.target.value;
    setSearchType(type);
  };
  const findByName = (e) => {
    // refreshData();
    dispatch(findByTitle({ type: type }));
  };

  return (
    <>
      <div class="bg-theme-overlay">
        <section class="section__breadcrumb ">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-8 text-center">
                <h2 class="text-capitalize text-white">Properties Listing</h2>
                <ul class="list-inline ">
                  <li class="list-inline-item">
                    <a href="#" class="text-white">
                      home
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="#" class="text-white">
                      Proprities Listing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- END BREADCRUMB --> */}

      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              {/* <!-- FORM FILTER --> */}
              <div class="products__filter mb-30">
                
                  <div class="products__filter__group">
                    <div class="products__filter__header">
                      <h5 class="text-center text-capitalize">
                        property filter
                      </h5>
                    </div>
                    <div class="products__filter__body">
                      {/* <div class="form-group">
                        <label class="mb-3">property Type</label>
                        <div class="filter__price">
                          <input
                            class="price-range"
                            type="text"
                            name="type"
                            placeholder="search..."
                            value={type}
                            onChange={onChangeSearchTitle}
                          />
                        </div>
                      </div> */}
                      <div>
                        <select
                          class="form-group"
                          value={type}
                          onChange={onChangeSearchTitle}
                        >
                          <option value="">property Type</option>
                          <option value="Villa">Villa</option>
                          <option value="House">House</option>
                          <option value="Apartement">Apartement</option>
                          <option value="commercial">commercial</option>
                          <option value="luxury">luxury</option>
                        </select>
                      </div>
                      {/* <div class="form-group">
                        <label class="mb-3">property Location</label>
                        <div class="filter__price">
                          <input
                            class="price-range"
                            type="text"
                            name="my_range"
                            placeholder="amman.."
                          />
                        </div>
                      </div> */}
                    </div>
                    <div class="products__filter__footer">
                      <div class="form-group mb-0">
                        <button
                          type="button"
                          onClick={findByName}
                          class="btn btn-primary text-capitalize btn-block"
                        >
                          <i class="fa fa-search ml-1"></i> search property{" "}
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                
              </div>
              {/* <!-- END FORM FILTER -->
                    <!-- ARCHIVE CATEGORY --> */}
              <div class=" wrapper__list__category">
                {/* <!-- CATEGORY --> */}
                <div class="widget widget__archive">
                  <div class="widget__title">
                    <h5 class="text-dark mb-0 text-center">
                      Categories Property
                    </h5>
                  </div>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="text-capitalize">
                        apartement
                        <span class="badge badge-primary">14</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        villa
                        <span class="badge badge-primary">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        family house
                        <span class="badge badge-primary">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        modern villa
                        <span class="badge badge-primary">8</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        town house
                        <span class="badge badge-primary">10</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-capitalize">
                        office
                        <span class="badge badge-primary">12</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- END CATEGORY --> */}
              </div>
              {/* <!-- End ARCHIVE CATEGORY --> */}
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-12">
                  <div class="tabs__custom-v2 ">
                    {/* <!-- FILTER VERTICAL --> */}
                    <ul class="nav nav-pills myTab" role="tablist">
                      <li class="list-inline-item mr-auto">
                        <span class="title-text">Sort by</span>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-toggle="pill"
                          href="#pills-tab-one"
                          role="tab"
                          aria-controls="pills-tab-one"
                          aria-selected="true"
                        >
                          <span class="fa fa-th-list"></span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-toggle="pill"
                          href="#pills-tab-two"
                          role="tab"
                          aria-controls="pills-tab-two"
                          aria-selected="false"
                        >
                          <span class="fa fa-th-large"></span>
                        </a>
                      </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade"
                        id="pills-tab-one"
                        role="tabpanel"
                        aria-labelledby="pills-tab-one"
                      ></div>
                      <div
                        class="tab-pane fade show active"
                        id="pills-tab-two"
                        role="tabpanel"
                        aria-labelledby="pills-tab-two"
                      >
                        <div class="clearfix"></div>
                        <div className="row">
                          {ads &&
                            ads.map((ad, index) => (
                              <div class="col-md-6 col-lg-6">
                                <div class="card__image card__box-v1">
                                  <div class="card__image-header h-250">
                                    <div class="ribbon text-capitalize">
                                      featured
                                    </div>
                                    <Link to={"SingleDetail/" + ad.id}>
                                      <img
                                        src={
                                          "http://127.0.0.1:8000/image/" +
                                          ad.image
                                        }
                                        alt=""
                                        class="img-fluid w100 img-transition"
                                      />
                                      <div class="info"> for sale</div>
                                    </Link>
                                  </div>
                                  <div class="card__image-body">
                                    <span class="badge badge-primary text-capitalize mb-2">
                                      {ad.type}
                                    </span>
                                    <h6 class="text-capitalize">{ad.title}</h6>

                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      {ad.location}
                                      ++
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
                            ))}
                        </div>

                        {/* <!-- LISTING LIST --> */}
                        <div class="cleafix"></div>
                      </div>
                    </div>
                    {/* <!-- END FILTER VERTICAL --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END LISTING LIST -->

    <!-- CALL TO ACTION --> */}
      
    </>
  );
};
export default List;
