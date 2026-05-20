import { useEffect } from 'react';

const useDynamicTitle = (title, description) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', description);
        document.head.appendChild(metaDesc);
      }

      // Also update OG description
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const originalOgDesc = ogDesc ? ogDesc.getAttribute('content') : '';
      if (ogDesc) ogDesc.setAttribute('content', description);

      // Also update OG title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const originalOgTitle = ogTitle ? ogTitle.getAttribute('content') : '';
      if (ogTitle) ogTitle.setAttribute('content', title);

      return () => {
        document.title = 'Neo Elevators — Premium Elevator Solutions in Maharashtra, India';
        if (metaDesc) metaDesc.setAttribute('content', originalDesc);
        if (ogDesc) ogDesc.setAttribute('content', originalOgDesc);
        if (ogTitle) ogTitle.setAttribute('content', originalOgTitle);
      };
    }

    return () => {
      document.title = 'Neo Elevators — Premium Elevator Solutions in Maharashtra, India';
    };
  }, [title, description]);
};

export default useDynamicTitle;