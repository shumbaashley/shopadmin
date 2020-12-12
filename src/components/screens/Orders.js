import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {apiURL} from '../../api'
import axios from 'axios'
import Loader from '../loader/Loader'

const Orders = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchOrders = async () => {
            const {data} = await axios.get(`${apiURL}/orders/`)
            setOrders(data)
        }
        fetchOrders()
    }, [])
    return (
        <Fragment>
                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-2 text-gray-800">Orders</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <Link to="#"
                            href="https://datatables.net">official DataTables documentation</Link>.</p>

                    {/* <!-- DataTales Example --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Products List</h6>
                        </div>
                        <div className="card-body">
                        {orders.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Order Items</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Ordered On</th>
                                            <th>Delivered On</th>
                                        </tr>
                                    </thead>                                    
                                    <tbody>
                                    { orders.map(order => (
                                      
                                            <tr>
                                                <td>{order._id}</td>
                                                <td>{order.orderItems}</td>
                                                <td>{order.totalPrice}</td>
                                                <td>{order.isPaid}</td>
                                                <td>{order.createdAt}</td>
                                                <td>{order.isDelivered}</td>
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

export default Orders
