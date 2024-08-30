import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import HomeNav from '../../Components/HomeNav';
// import './validation';
import './index.css'


const Signup = () => {

  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('user');
  const [aadharNo, setAadhar] = useState('');

  const validateForm = () => {
    // Validate username
    if (userName.length === 0) {
      toast.warning('Please enter username');
      return false;
    } else if (userName.length < 6) {
      toast.warning('Username must be at least six characters long');
      return false;
    }



    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning('Please enter a valid email address');
      return false;
    }



    // Validate mobile number
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(phone)) {
      toast.warning('Please enter a valid mobile number');
      return false;
    }

    // Validate Aadhar number
    if (aadharNo.length === 0) {
      toast.warning('Please enter Aadhar number');
      return false;
    }

    // Validate password format
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;
    if (!passwordRegex.test(password)) {
      toast.warning('Password must contain uppercase, lowercase, number, and a special character');
      return false;
    }
    return true;
  };

  const signupUser = () => {
    setRole('user');

    if (!validateForm()) {
      return;
    }

    const body = {
      userName,
      email,
      password,
      phone,
      role,
      aadharNo,
    };

    const url = `http://localhost:8082/signup/users`;

    axios.post(url, body)
      .then((response) => {
        const result = response.data;
        if (result['status'] === 'success') {
          toast.success('Signup successful');
          navigate('/home');
        } else {
          toast.error(result.error);
        }
      })
      .catch((error) => {
        toast.error('An error occurred during signup');
        console.error(error);
      });
  };

  useEffect(() => {
    toast.info('Welcome to Delight Service');
  }, []);

  return (
    
      <div style={{ backgroundColor: 'aliceblue', paddingBottom: 300 }}>
        
      {/* <HomeNav /> */}
      <h1 className='title' style={{ textAlign: 'center', paddingBottom: 30 }}>
        SignUp
      </h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Phone
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type='text'
                className='form-control' />
            </div>

            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Aadhar No
              </label>
              <input
                onChange={(e) => setAadhar(e.target.value)}
                type='text'
                className='form-control' />
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
              <button onClick={signupUser} className='btn btn-primary'>
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
      </div>
   
  );
};

export default Signup;
