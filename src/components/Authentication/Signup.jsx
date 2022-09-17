import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg_login from '../../assets/images/login.png';
import auth from '../../firebase.init';
import Spinner from '../../components/Shared/Spinner'

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
    
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  }
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  if (user || gUser) {
    navigate(from, { replace: true });
  }
  if (loading || gLoading || updating) {
    return <Spinner/>
  }
    let signUpError;
  if (error || gError || uError) {
    signUpError = error.code || gError.code;
  }

  return (
    <div
      style={{
        background: `url('${bg_login}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom-left'
      }}
      className=' h-screen flex justify-center items-center'
    >
      {/* Log In card section */}
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-actions justify-center">
            {/* Name field */}
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
                <input
                  {...register("name", { required: true })}
                  type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">Name is required*</span> }
                {/* */}
              </label>
            </div>
            {/* Email field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message:'Email is required*'
                    },
                  })}
                  type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                {/* */}
              </label>
            </div>
            {/* password field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is required*'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must input 6 character*'
                    }
                  })}
                  type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                {/* */}
              </label>
            </div>
            <span className="label-text-alt text-red-500">{signUpError}</span>
            <button className="btn w-full">Sign Up</button>
            <p><small>Already have an account? <Link to='/login' className=' text-[#19D3AE]'>Log In here</Link></small></p>
          </div>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={()=>signInWithGoogle()}
            className="btn btn-outline">CONTINUE WITH GOOGLE</button>
        </div>
      </div> 
    </div>
  );
};

export default Signup;