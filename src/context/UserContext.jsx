import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
const MAX_REFRESHES = 5; // Maximum number of refreshes allowed
const REFRESH_COUNT_KEY = 'refreshCount';
const LAST_ACTIVITY_KEY = 'lastActivity';

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data and check session on mount
    const storedUser = localStorage.getItem("user");
    const lastActivity = localStorage.getItem(LAST_ACTIVITY_KEY);
    const refreshCount = parseInt(localStorage.getItem(REFRESH_COUNT_KEY) || '0');

    // Increment refresh count
    localStorage.setItem(REFRESH_COUNT_KEY, (refreshCount + 1).toString());

    if (storedUser) {
      // Check if session has timed out
      if (lastActivity && Date.now() - parseInt(lastActivity) > SESSION_TIMEOUT) {
        logout(); // Session timeout
        return;
      }

      // Check if max refreshes exceeded
      if (refreshCount >= MAX_REFRESHES) {
        logout(); // Too many refreshes
        return;
      }

      setUser(JSON.parse(storedUser));
      updateLastActivity();
    }
  }, []);

  useEffect(() => {
    // Set up activity listeners
    const handleActivity = () => {
      if (user) {
        updateLastActivity();
      }
    };

    // Update last activity on user interaction
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    // Check session status periodically
    const intervalId = setInterval(() => {
      checkSession();
    }, 1000); // Check every second

    return () => {
      // Cleanup
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      clearInterval(intervalId);
    };
  }, [user]);

  const updateLastActivity = () => {
    localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());
  };

  const checkSession = () => {
    if (!user) return;

    const lastActivity = parseInt(localStorage.getItem(LAST_ACTIVITY_KEY));
    if (Date.now() - lastActivity > SESSION_TIMEOUT) {
      logout(); // Session timeout
    }
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem(REFRESH_COUNT_KEY, '0'); // Reset refresh count
    updateLastActivity();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem(LAST_ACTIVITY_KEY);
    localStorage.removeItem(REFRESH_COUNT_KEY);
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      logout,
      isSessionExpired: !user && localStorage.getItem(LAST_ACTIVITY_KEY) !== null 
    }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext); 