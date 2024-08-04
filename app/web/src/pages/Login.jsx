import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import appConfig from '../config/app.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password, remember } = data;
    const headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    };

    try {
      const response = await axios.post(`${appConfig.BACKEND_API_URL}/api/users/login`, {
        email, password
      }, { headers: headersList });
      const result = await response.data;
      console.log(result);

      // toast.success("Registration successful");
      // navigate('/login');

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="bg-gray-50 h-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black-900 md:text-5xl lg:text-6xl dark:text-black">
            Welcome to <br /> Goflash
          </h1>
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-black-900">Sign in to GoFlash</h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black-900">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="espoircibembe@gmail.com"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black-900">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register('password', { required: 'Password is required' })}
                  placeholder="••••••••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    {...register('remember')}
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">
                    Remember this device
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 sm:w-auto"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-black-900">
                Not registered yet?{' '}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};