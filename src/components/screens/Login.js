import React, {useState, Fragment } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/userActions'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password)
        dispatch(loginUser(email, password))
    }

    return (
        <Fragment>
    <div className="container">

        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome</h1>
                                    </div>
                                    <form className="user" onSubmit={(e) => submitHandler(e)}>
                                        <div className="form-group">
                                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" required/>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block">
                                            Login
                                        </button>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <Link className="small" to="/register">Create an Account!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
            
    </Fragment>
    )
}

export default Login

