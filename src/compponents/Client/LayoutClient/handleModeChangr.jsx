import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../../../Redux/App/app.slide';

const SomeComponent = () => {
  const mode = useSelector((state) => state.app.mode);
  const dispatch = useDispatch();

  const handleModeChange = () => {
    dispatch(changeMode(mode === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={handleModeChange}>
      {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default SomeComponent;
