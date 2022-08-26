import { useEffect, useState } from 'react';

export function useMinWidth(size: number): boolean | undefined {
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
}

export function useMaxWidth(size: number): boolean | undefined {
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
}
