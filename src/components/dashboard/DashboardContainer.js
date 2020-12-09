import React, {  Fragment } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Modal from '../modal/Modal'
import Sidebar from '../sidebar/Sidebar'
import Charts from "../screens/Charts";
import Tables from "../screens/Tables";
import Home from "../screens/Home";
import { Route } from 'react-router-dom';


const DashboardContainer = ({history}) => {


    const logoutHandler = () => {
        console.log("Logout")
    }
    return (
        <Fragment>
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
        <Sidebar/>

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                <Header/>

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* Different Screens */}

                    
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/tables" component={Tables}/>
                    <Route exact path="/charts" component={Charts}/>

                    {/* Different Screens */}
                    
                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            <Footer/>

        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    <Modal logoutHandler={logoutHandler}/>
            
    </Fragment>
    )
}

export default DashboardContainer
