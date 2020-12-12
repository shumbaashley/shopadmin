import React, { useEffect,  Fragment } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Modal from '../modal/Modal'
import Sidebar from '../sidebar/Sidebar'
import Charts from "../screens/Charts";
import Tables from "../screens/Tables";
import Home from "../screens/Home";
import { Route } from 'react-router-dom';
import { logout } from '../../api/auth'
import axios from 'axios'
import Products from '../screens/Products'
import jwtDecode from 'jwt-decode'

axios
    .interceptors
    .request
    .use(config => {

        const token = localStorage.getItem('user-token');

        if (token) {
            config.headers['token'] = `${token}`
        }
        return config;
    }, error => {
        Promise.reject(error)
    });



const DashboardContainer = () => {

    useEffect(() => {
        const token = localStorage.getItem('user-token');

        const user = jwtDecode(token)
        
        console.log(user)
    }, [])

    const logoutHandler = () => {
        logout()
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
                    <Route exact path="/products" component={Products}/>
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
