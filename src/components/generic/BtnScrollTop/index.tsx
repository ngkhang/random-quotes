import { useEffect, useState } from 'react';
import Icons from '~/utils/helpers/icons';

function BtnScrollTop() {
  const [isVisible, setVisible] = useState(false);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`${isVisible ? 'fixed' : 'hidden'} text-slate-500 bottom-1 right-1 opacity-50 hover:opacity-100`}>
      <button type="button" className="" onClick={handleScrollTop}>
        {Icons.ArrowUp('text-3xl')}
      </button>
    </div>
  );
}

export default BtnScrollTop;
