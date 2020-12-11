import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {apiURL} from '../../api'
import axios from 'axios'

const Products = () => {

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await axios.get(`${apiURL}/products/`)
            console.log(products)
        }
        fetchProducts()
    }, [])
    return (
        <Fragment>
                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-2 text-gray-800">Products</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <Link to="#"
                            href="https://datatables.net">official DataTables documentation</Link>.</p>

                    {/* <!-- DataTales Example --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Products List</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Shop</th>
                                            <th>Category</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>                                    
                                    <tbody>
                                        
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    </Fragment>
    )
}

export default Products
