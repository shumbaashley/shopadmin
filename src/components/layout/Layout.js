import React, { useEffect, Fragment } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../../actions/userActions'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Modal from '../modal/Modal'
import Sidebar from '../sidebar/Sidebar'


const Layout = ({history}) => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const {userInfo, loading, error} = userLogin

    // useEffect(() => {
    //     if(!userInfo){
    //         history.push('/login')
    //     }
    // }, [history, userInfo])

    const logoutHandler = () => {
        dispatch(logoutUser())
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

                    {/* ======================= */}

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

export default Layout
