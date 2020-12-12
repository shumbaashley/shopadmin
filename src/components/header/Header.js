import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = ({user : {username}}) => {
    return (
        <Fragment>
{/* <!-- Topbar --> */}
<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

{/* <!-- Sidebar Toggle (Topbar) --> */}
<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars"></i>
</button>



{/* <!-- Topbar Navbar --> */}
<ul className="navbar-nav ml-auto">


    <div className="topbar-divider d-none d-sm-block"></div>

    {/* <!-- Nav Item - User Information --> */}
    <li className="nav-item dropdown no-arrow">
        <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{username}</span>
            <img className="img-profile rounded-circle" alt="" src="img/undraw_profile.svg"/>
        </Link>
        {/* <!-- Dropdown - User Information --> */}
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <Link className="dropdown-item" to="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </Link>
        </div>
    </li>

</ul>

</nav>
{/* <!-- End of Topbar --> */}
        </Fragment>
    )
}

export default Header
