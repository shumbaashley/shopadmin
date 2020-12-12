import React, {useState, Fragment } from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false)

    const toggle = toggleSidebar ? "toggled" : "";
    
    return (
        <Fragment>
            
        {/* <!-- Sidebar --> */}
        <ul className={`navbar-nav bg-gradient-primary sidebar ${toggle}  sidebar-dark accordion`} id="accordionSidebar">

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



        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li class="nav-item">
                <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                </Link>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Perfomance Charts:</h6>
                        <Link class="collapse-item" to="/transactions">Transactions</Link>
                        <Link class="collapse-item" to="/deliveries">Deliveries</Link>
                    </div>
                </div>
            </li>


        {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span>
                </Link>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Table Listings:</h6>
                        <Link class="collapse-item" to="/products">Products</Link>
                        <Link class="collapse-item" to="/shops">Shops</Link>
                        <Link class="collapse-item" to="/orders">Orders</Link>
                    </div>
                </div>
            </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block"/>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
            <button onClick={() => setToggleSidebar(!toggleSidebar)} className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        </ul>
        {/* <!-- End of Sidebar --> */}
        </Fragment>
    )
}

export default Sidebar
