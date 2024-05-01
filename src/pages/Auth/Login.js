import React, { useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password })
            if (res && res.data.success) {
                toast.success(res.data.message)
                console.log(res.data)
                navigate('/')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }
    return (
        <Layout title="Login Ecommerce App">
            <div className='register'>
                <h1> Login Page </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" placeholder='Enter email' id="exampleInputEmail" />
                    </div>

                    <div className="mb-3">
                        <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" placeholder='Enter password' id="exampleInputAddress" />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Login