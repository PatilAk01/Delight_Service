import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const validateForm = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.warning('Please enter a valid email address')
      return false
    }

    // Validate password length and characters
    if (password.length < 6) {
      toast.warning('Password must be at least 6 characters long')
      return false
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/
    if (!passwordRegex.test(password)) {
      toast.warning('Password must contain uppercase, lowercase, number, and a special character')
      return false
    }

    return true
  }

  const signinUser = () => {
    if (!validateForm()) {
      return
    }

    const body = {
      email,
      password,
    }

    // URL to make signin API call
    const url = `http://localhost:8082/user/email`

    // Make API call using axios
    axios.post(url, body).then((response) => {
      // Get the server result
      const result = response.data
      console.log(result)
      if (result['data'] != null) {
        toast.success('Welcome to the application')

        // Get the data sent by server
        const { userId, role } = result['data']

        // Persist the logged-in user's information for future use
        sessionStorage['id'] = userId
        console.log(sessionStorage['id'])
        sessionStorage['loginStatus'] = 1

        if (role === 'admin') navigate('/Admin')
        else if (role === 'delivery') navigate('/Delivery')
        else navigate('/showTiffin')
      } else {
        toast.error('Invalid username or password')
      }
    })
  }

  return (
    <div className='bor'>
      <h1 className='title' style={{ textAlign: 'center' }}>
        SignIn
      </h1>
      <br />
      <br />
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form' style={{ border: 1 }}>
            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <div>
                No account yet? <Link to='/signup'>Signup here</Link>
              </div>
              <button onClick={signinUser} className='btn btn-primary'>
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default Signin
