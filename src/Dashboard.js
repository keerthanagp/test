import React, { useState } from 'react';
import './Dashboard.css';
import Components from './Allpages/Components';
import Utilities from './Allpages/Utilities';
import Pages from './Allpages/Pages';
import Charts from './Allpages/Charts';
import Tables from './Allpages/Tables';
import Footer from './Allpages/Footer';
import Dashhead from './Allpages/Dashhead';
import Admin from './Allpages/Admin';
import Cards from './Dashboardbox/Cards';
import ProjectCart from './Dashboardbox/ProjectCart';
import ColorsCard from './Dashboardbox/ColorsCard';
import IllustrationCard from './Dashboardbox/IllustrationCard';
import DropdownCard from './Dashboardbox/DropdownCard';
import MessageCard from './Dashboardbox/MessageCard';
import LogoutCard from './Dashboardbox/LogoutCard';
import Sidebarside from './Dashboardbox/Sidebarside';
import Approachcard from './Dashboardbox/Approachcard';



function Dashboard() {
    const [style,setStyle]= useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
  return (
    <div>
<body id="page-top">
<div id="wrapper">
    <ul className={style} id="accordionSidebar">
        <Admin/>
        <hr className="sidebar-divider my-0"/>
        <Dashhead/>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Interface
        </div>
        <Components/>
        <Utilities/>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Addons
        </div>
        <Pages/>
        <Charts/>
        <Tables/>
        <hr className="sidebar-divider d-none d-md-block"/>
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
        <Sidebarside/>
    </ul>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                {/* <!-- Topbar Search --> */}
                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a>
                        {/* <!-- Dropdown - Messages --> */}
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <DropdownCard/>
                    <MessageCard/>
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <LogoutCard/>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>
            <Cards/>
                <div className="row">

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* <!-- Content Row --> */}
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <ProjectCart/>
                        <ColorsCard/>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <IllustrationCard/>
                        <Approachcard/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</div>
<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a>

{/* <!-- Logout Modal--> */}
<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>
</body>
    </div>
  )
}
export default Dashboard