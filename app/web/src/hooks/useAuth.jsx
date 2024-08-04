import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import verifyToken from '../utils/verifyToken';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const isValid = await verifyToken();
      if (!isValid) {
        navigate('/login'); // Redirect to login if the token is invalid
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [navigate]);

  return isAuthenticated;
};

export default useAuth;