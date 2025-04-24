import React, { useEffect, useState } from 'react';

// Simple animation utility to mimic framer-motion functionality
export const motion = {
  div: ({ initial, animate, transition, className, ...props }: any) => {
    const [style, setStyle] = useState(initial);

    useEffect(() => {
      if (animate) {
        const timer = setTimeout(() => {
          setStyle(animate);
        }, (transition?.delay || 0) * 1000);
        return () => clearTimeout(timer);
      }
      return undefined;
    }, [animate, transition?.delay]);

    const transitionStyle = {
      transition: `all ${transition?.duration || 0.3}s ease-in-out`,
    };

    return (
      <div
        className={className}
        style={{ ...style, ...transitionStyle }}
        {...props}
      />
    );
  },
  span: ({ initial, animate, transition, className, ...props }: any) => {
    const [style, setStyle] = useState(initial);

    useEffect(() => {
      if (animate) {
        const timer = setTimeout(() => {
          setStyle(animate);
        }, (transition?.delay || 0) * 1000);
        return () => clearTimeout(timer);
      }
      return undefined;
    }, [animate, transition?.delay]);

    const transitionStyle = {
      transition: `all ${transition?.duration || 0.3}s ease-in-out`,
    };

    return (
      <span
        className={className}
        style={{ ...style, ...transitionStyle }}
        {...props}
      />
    );
  },
  h2: ({ initial, animate, transition, className, ...props }: any) => {
    const [style, setStyle] = useState(initial);

    useEffect(() => {
      if (animate) {
        const timer = setTimeout(() => {
          setStyle(animate);
        }, (transition?.delay || 0) * 1000);
        return () => clearTimeout(timer);
      }
      return undefined;
    }, [animate, transition?.delay]);

    const transitionStyle = {
      transition: `all ${transition?.duration || 0.3}s ease-in-out`,
    };

    return (
      <h2
        className={className}
        style={{ ...style, ...transitionStyle }}
        {...props}
      />
    );
  },
  p: ({ initial, animate, transition, className, ...props }: any) => {
    const [style, setStyle] = useState(initial);

    useEffect(() => {
      if (animate) {
        const timer = setTimeout(() => {
          setStyle(animate);
        }, (transition?.delay || 0) * 1000);
        return () => clearTimeout(timer);
      }
      return undefined;
    }, [animate, transition?.delay]);

    const transitionStyle = {
      transition: `all ${transition?.duration || 0.3}s ease-in-out`,
    };

    return (
      <p
        className={className}
        style={{ ...style, ...transitionStyle }}
        {...props}
      />
    );
  },
};

// Hook to detect if an element is in the viewport
export const useInView = (ref: React.RefObject<HTMLElement>, threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return isInView;
};