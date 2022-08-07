import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate()
    const check=()=>{

        if(!localStorage.getItem("user")) {alert('please login first')}         
     else

     navigate('/posts/add')
     
    }
    
    return (
        <>

            <section>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="single__blog-detail">
                                

                                <header className="blog__tags mb-4 Header">
                                    <nav>
                                        <ul >
                                            <li class="list-inline-item">

                                                <button onClick={check} className='btn-primary ' style={{ color: "white", fontWeight: 'bold' }} >Add a question <i class="fa fa-plus-circle mr-1"></i> </button>
                                            </li>  <br/>
                                            <li class="list-inline-item">

                                                <Link className='btn-primary ' style={{ color: "white", fontWeight: 'bold' }} to="">Questions</Link>
                                            </li>


                                            <li class="list-inline-item">

                                                <Link className='btn-primary ' style={{ color: "white", fontWeight: 'bold' }} to="/posts/user">Filter by users</Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </header>
                                <h1>
                                   Latest Questions
                                </h1>
                                <Outlet />



                            </div>
                        </div>
                        {/* <!-- WIDGET BLOG --> */}
                        <div class="col-lg-4">
                            <div class="sticky-top">

                                {/*  */}
                                <aside>

                                </aside>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END WIDGET BLOG --> */}
                </div>
                <Header />
            </section>
            <main className="App">


            </main>


        </>
    )
}

export default Layout