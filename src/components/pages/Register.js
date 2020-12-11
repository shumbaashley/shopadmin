import React, {useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../../api/auth'


const Register = ({history}) => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [username, setUserName] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        if(password === password2){
            const res = await registerUser(firstname, lastname, email, username, password)
            console.log(res)
            history.push('/login')
            window.location.href = '/login'
        }else {
            alert("Passwords do not match")
        }

    }

    return (
        <Fragment>

    <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user" onSubmit={(e) => submitHandler(e)}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name" required/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Last Name" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input onChange={(e) => setUserName(e.target.value)} type="text" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Username" required/>
                                </div>
                                <div className="form-group">
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" required/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" required/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input onChange={(e) => setPassword2(e.target.value)} type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repeat Password" required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                    Register Account
                                </button>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <Link className="small" to="/login">Already have an account? Login!</Link>
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

export default Register
