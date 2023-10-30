import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const MyComponent = () => {

  useEffect(() => {
    // Ensure window and document are defined (i.e., on the client side)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      ScrollReveal().reveal('.my-element', {
        duration: 2000,
        reset: true,
        distance: '40px',
        origin: 'bottom'
        // ... other ScrollReveal options
      });
    }
  }, []);

  return (
    <div className="my-element">
      This content will be revealed on scroll.
    </div>
  );
}

export default MyComponent;
