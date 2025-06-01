import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KEY_EVENTS } from 'src/tv/Constants/Contants';

const KEYDOWN_EVENT = 'keydown'

const useBackNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEY_EVENTS.BACKSPACE || event.key === KEY_EVENTS.ESCAPE || event.key === KEY_EVENTS.SAMSUNG_BACK) {
        event.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener(KEYDOWN_EVENT, handleKeyDown);

    return () => {
      window.removeEventListener(KEYDOWN_EVENT, handleKeyDown);
    };
  }, [navigate]);
};

export default useBackNavigation;
