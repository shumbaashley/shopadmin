import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {apiURL} from '../../api'
import axios from 'axios'
import Loader from '../loader/Loader'

const Shops = () => {

    const [shops, setShops] = useState([])
    useEffect(() => {
        const fetchShops = async () => {
            const {data} = await axios.get(`${apiURL}/shops/`)
            setShops(data)
        }
        fetchShops()
    }, [])
    return (
        <Fragment>
                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-2 text-gray-800">Shops</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <Link to="#"
                            href="https://datatables.net">official DataTables documentation</Link>.</p>

                    {/* <!-- DataTales Example --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Shops List</h6>
                        </div>
                        <div className="card-body">
                        {shops.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Owner</th>
                                            <th>Location</th>
                                            <th>Phone</th>
                                            <th>Logo</th>
                                        </tr>
                                    </thead>                                    
                                    <tbody>
                                    { shops.map(shop => (
                                      
                                            <tr>
                                                <td>{shop.name}</td>
                                                <td>{shop.user}</td>
                                                <td>{shop.location}</td>
                                                <td>{shop.phone}</td>
                                                <td>{shop.image}</td>
                                            </tr>
                                        ))
                                    }                                       
                                    </tbody>
                                </table>
                            </div>
                             ): <Loader/>}
                        </div>
                    </div>
    </Fragment>
    )
}

export default Shops