import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserNav = () => {
  const navigate = useNavigate();

  const Logout = () => {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('loginStatus');
    navigate('/signin');
  };

  return (
    <div className="my">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/showTiffin' style={{ fontWeight: 'bold' }}>
          Delight Service
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/address'>
                Add Address
              </Link>
            </li>
            {/* <li className='nav-item active'>
              <Link className='nav-link' to='/userProfile'>
                Edit Profile
              </Link>
            </li> */}
            <li className='nav-item active'>
              <Link className='nav-link' to='/delite'>
                Tiffin
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/Admintiffin'>
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <button type='submit' onClick={Logout} className='btn btn-danger'>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default UserNav;
