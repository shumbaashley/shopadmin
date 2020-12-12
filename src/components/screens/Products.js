import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {apiURL} from '../../api'
import axios from 'axios'
import Loader from '../loader/Loader'

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${apiURL}/products/`)
            setProducts(data)
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
                        {products.length > 0 ? (
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
                                    { products.map(product => (
                                      
                                            <tr>
                                                <td>{product.name}</td>
                                                <td>{product.shop}</td>
                                                <td>{product.category}</td>
                                                <td>{product.image}</td>
                                                <td>{product.price}</td>
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

export default Products
