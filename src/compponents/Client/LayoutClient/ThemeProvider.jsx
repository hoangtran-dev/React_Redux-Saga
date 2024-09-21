import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  const mode = useSelector((state) => state.app.mode);

  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark-mode' : 'light-mode';
  }, [mode]);

  return (
    <>
      {children}
    </>
  );
};

export default ThemeProvider;
