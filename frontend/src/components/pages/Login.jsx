import React from 'react';
import Layout from '../common/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiUrl } from '../common/Config';


 const login = () => {
    const navigate = useNavigate();
    const {
        handleSubmit, register, formState: { errors }, setError
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
       await fetch(`${apiUrl}/login`, {   
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
    })
     .then(res => res.json())
     .then(result => {
        
        if (result.status === 200){
           const userInfo = {
            name: result.name,
            id: result.id,
            token: result.token,
           }
           localStorage.setItem('userInfoLms', JSON.stringify(userInfo)); 
           navigate('/account/my-learning');
        } else {
            const errors = result.errors; 
            Object.keys(errors).forEach(field => {
                setError(field, { type: 'server', message: errors[field][0] });
            })
        }
     })
    }

  return (
    <Layout>
      <div className="container py-5 mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card border-0 shadow login">
              <div className="card-body p-4">
                <h3 className="border-bottom pb-3 mb-3">Login</h3>

                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    placeholder="Email"
                    {...register('email', {
                      required: 'The email field is required.',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email address.',
                      },
                    })}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`}
                    placeholder="Password"
                    {...register('password', {
                      required: 'The password field is required.',
                    })}
                  />
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>

                  <Link to="/account/register" className="text-secondary">
                    Register Here
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default login;