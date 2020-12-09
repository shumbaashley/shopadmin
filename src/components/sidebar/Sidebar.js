import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <Fragment>
            
        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Shop Admin </div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>


{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Pages
</div>


{/* <!-- Nav Item - Charts --> */}
<li className="nav-item">
    <Link className="nav-link" to="/charts">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></Link>
</li>

{/* <!-- Nav Item - Tables --> */}
<li className="nav-item">
    <Link className="nav-link" to="/tables">
        <i className="fas fa-fw fa-table"></i>
        <span>Tables</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider d-none d-md-block"/>

{/* <!-- Sidebar Toggler (Sidebar) --> */}
<div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
{/* <!-- End of Sidebar --> */}
        </Fragment>
    )
}

export default Sidebar
