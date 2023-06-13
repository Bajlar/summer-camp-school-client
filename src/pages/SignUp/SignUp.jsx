import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from '../../components/SocialLogin';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirm) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Passwords don't match!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })

    // createUser(data.email, data.password).then((result) => {
    //   const loggedUser = result.user;
    //   console.log(loggedUser);
    //   updateUserProfile(data.name, data.photo)
    //     .then(() => {
    //       const saveUser = { name: data.name, email: data.email };
    //       fetch("https://recap-bistro-boss-server.vercel.app/users", {
    //         method: "POST",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         body: JSON.stringify(saveUser),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           // console.log(data);
    //           if (data.insertedId) {
    //             Swal.fire({
    //               position: "center",
    //               icon: "success",
    //               title: "User created successfully.",
    //               showConfirmButton: false,
    //               timer: 1500,
    //             });
    //           }
    //         });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });
  };

  // console.log(errors);

  return (
    <div className="mt-4">
      <Helmet>
        <title>Cricket academy | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col md:w-4/12 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Enter your Name"
                  className="input"
                />
                {errors.name && (
                  <span className="text-red-500 text-left mt-2">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your Email"
                  className="input"
                />
                {errors.email && (
                  <span className="text-red-500 text-left mt-2">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&?*])(?=.*[0-9])/,
                  })}
                  placeholder="Enter your password"
                  className="input"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-left mt-2">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-left mt-2">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-left mt-2">
                    Password must have one uppercase one lower case, one special
                    characters
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  {...register("confirm")}
                  placeholder="Confirm Password"
                  className="input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="Enter your photo URL"
                  className="input"
                />
                {errors.photo && (
                  <span className="text-red-500 text-left mt-2">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-lg text-white bg-[#04AA6D]
                  hover:bg-[#04AA6D] capitalize border-0"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-lg text-center font-medium text-[#D1A054]">
                Already registered? <Link to="/login">Go to login page</Link>
              </p>
            </form>
            <div className="text-center -mt-5">
              <p className="text-lg font-medium">Or sign in with</p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;