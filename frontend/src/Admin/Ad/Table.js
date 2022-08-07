import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../redux/adSlice";
import { deleteAd } from "../redux/adSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Table = () => {
  
  const dispatch = useDispatch();
  const ads = useSelector(state => state.ad.ads);
  console.log(ads);
  const loading = useSelector(state => state.ad.loading);

  useEffect(() => {
    dispatch(getAds());

  }, [dispatch]);
 
  const handleDelete = id => {
    
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
   
      if (result.isConfirmed) {
        dispatch(deleteAd(id));
   
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

      

      // navigate('/adtable', { replace: true }); 
    
  }


  
  const allads = ads.map(ad => { 
    
    return (
      <>
      
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card h-100">

            {/* image slider */}
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={'http://127.0.0.1:8000/image/'+ad.image} alt="First slide" width={350} height={350} />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={'http://127.0.0.1:8000/image/' + ad.image_2} alt="Second slide" width={350} height={350} />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={'http://127.0.0.1:8000/image/' + ad.image_3} alt="Third slide" width={350} height={350} />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={'http://127.0.0.1:8000/image/' + ad.image_4} alt="Third slide" width={350} height={350} />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            {/*  end of image slider */}
            <div class="card-body">
              <h3 class=" text-left" style={{fontSize:"20px",textTransform:"capitalize", letterSpacing:'0px'}}>{ad.title}</h3>
              <h6 class="card-title" style={{fontSize:"15px"}}>{ad.type}</h6>
              <p class="card-text">
                {ad.description}
              </p>
              <br /><br />
              <small class="text-muted">{ad.location}</small><br />
              <small class="text-muted">{ad.phone}</small>
              <a class="ml-5 px-3" href={`adedit/${ad.id}`}>
                <i class="bx bx-edit-alt me-1 "></i>
              </a>
              <button type="submit" class="bx bx-trash me-2" onClick={() => {
                handleDelete(ad.id)
              }}>
              </button>

              {/* <a class="mg-2" onClick={(e) => {
                // e.preventDefault();
                dispatch(deleteAd(ad.id))
                console.log("ad Id",ad.id);
                navigate('/adtable', { replace: true })
              }
              }
                href="/adtable">
                <i class="bx bx-trash me-2"></i>
              </a> */}
            </div>
          </div>
        </div>
      </>

    )

  });

  return (
    <>
      {/* <!-- Layout wrapper --> */}
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          {/* <!-- Menu --> */}

          <Sidebar />
          {/* <!-- / Menu -->


    <!-- Layout container --> */}
          <div class="layout-page">
            {/* <!-- Navbar --> */}

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">
              {/* <!-- Content --> */}

              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                  <span class="text-muted fw-light">Forms/</span> Horizontal
                  Layouts
                </h4>




                <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
                 {allads}
               
                </div>


              </div>

              {/* <!-- / Content -->

        <!-- Footer --> */}
              <Footer />
              {/* <!-- / Footer --> */}

              <div class="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* <!-- / Layout wrapper --> */}
    </>
  );
}
   

export default Table