import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationContext = createContext();

const routeOrder = ['/', '/about', '/contact'];

export const NavigationProvider = ({ children }) => {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(location.pathname);
  const [direction, setDirection] = useState('forward');

  useEffect(() => {

    const previousIndex = routeOrder.indexOf(previousPath);
    const currentIndex = routeOrder.indexOf(location.pathname);

    console.log(routeOrder.indexOf(location.pathname));
    console.log(routeOrder.indexOf(previousPath));

    setDirection(currentIndex >= previousIndex ? 'forward' : 'backward');
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  return (
    <NavigationContext.Provider value={{ direction }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
