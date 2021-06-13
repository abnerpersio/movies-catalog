import React, { useState, useEffect } from 'react';

export const useMinWidth = (size: number): boolean | undefined => {
  const [isMinWidth, setisMinWidth] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setisMinWidth(window.innerWidth > size);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return isMinWidth;
};

export const useMaxWidth = (size: number): boolean | undefined => {
  const [isMaxWidth, setMaxWidth] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setMaxWidth(window.innerWidth < size);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return isMaxWidth;
};
