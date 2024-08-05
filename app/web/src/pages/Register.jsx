import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import appConfig from '../config/app.config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate();
   const onSubmit = async (data) => {
      if (data.password !== data.confirmPassword) {
         toast.error("SVP entrer les mot de password identiques");
         return;
      }
      const headersList = {
         "Accept": "*/*",
         "Content-Type": "application/json"
      };
      const bodyContent = {
         "prenom": data.firstName + " " + data.lastName,
         "email": data.email,
         "password": data.password,
      };

      try {
         const response = await axios.post(`${appConfig.BACKEND_API_URL}/api/users/register`, bodyContent, { headers: headersList });
         const result = await response.data;
         console.log(result);

         toast.success("Registration successful");
         navigate('/app');

      } catch (error) {
         toast.error(error.message);
      }

   };

   return (
      <div className="h-auto bg-gray-50">
         <div className="mx-auto">
            <div className="flex justify-center px-6 py-12">
               <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                  <div
                     className="w-full h-auto bg-gray-550 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                     style={{
                        backgroundImage: `url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`
                     }}
                  ></div>
                  <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                     <h3 className="py-4 text-2xl text-center text-gray-800">Create an Account!</h3>
                     <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 md:flex md:justify-between">
                           <div className="mb-4 md:mr-2 md:mb-0">
                              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                 First Name
                              </label>
                              <input
                                 className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                 id="firstName"
                                 type="text"
                                 placeholder="First Name"
                                 {...register('firstName', { required: 'First name is required' })}
                              />
                              {errors.firstName && <p className="text-xs italic text-red-500">{errors.firstName.message}</p>}
                           </div>
                           <div className="md:ml-2">
                              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                 Last Name
                              </label>
                              <input
                                 className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                 id="lastName"
                                 type="text"
                                 placeholder="Last Name"
                                 {...register('lastName', { required: 'Last name is required' })}
                              />
                              {errors.lastName && <p className="text-xs italic text-red-500">{errors.lastName.message}</p>}
                           </div>
                        </div>
                        <div className="mb-4">
                           <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                              Email
                           </label>
                           <input
                              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="email"
                              type="email"
                              placeholder="Email"
                              {...register('email', { required: 'Email is required' })}
                           />
                           {errors.email && <p className="text-xs italic text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4 md:flex md:justify-between">
                           <div className="mb-4 md:mr-2 md:mb-0">
                              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                 Password
                              </label>
                              <input
                                 className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                 id="password"
                                 type="password"
                                 placeholder="******************"
                                 {...register('password', { required: 'Password is required' })}
                              />
                              {errors.password && <p className="text-xs italic text-red-500">{errors.password.message}</p>}
                           </div>
                           <div className="md:ml-2">
                              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirmPassword">
                                 Confirm Password
                              </label>
                              <input
                                 className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                 id="confirmPassword"
                                 type="password"
                                 placeholder="******************"
                                 {...register('confirmPassword', { required: 'Please confirm your password' })}
                              />
                              {errors.confirmPassword && <p className="text-xs italic text-red-500">{errors.confirmPassword.message}</p>}
                           </div>
                        </div>
                        <div className="mb-6 text-center">
                           <button
                              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                              type="submit"
                           >
                              Register Account
                           </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="text-center">
                           <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/">
                              Already have an account? Login!
                           </Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         <ToastContainer />
      </div>
   );
}