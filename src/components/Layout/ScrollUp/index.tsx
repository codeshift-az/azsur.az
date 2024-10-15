import { useEffect, useState } from 'react';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollSpeed = 900;
    const scrollStep = -window.scrollY / (scrollSpeed / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <a
          href="#top"
          className="scrollUp"
          id="scrollUp"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}>
          <i className="fa fa-angle-up"></i>
        </a>
      )}
    </div>
  );
};

export default ScrollUp;
