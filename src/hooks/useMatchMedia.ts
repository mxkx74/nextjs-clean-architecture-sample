import { useState, useCallback } from 'react';
import { mediaSize } from '@/theme';
import { useIsomorphicEffect } from './useIsomorphicEffect';

export const useMatchMedia = (size: keyof typeof mediaSize) => {
  const [targetReached, setTargetReached] = useState<boolean | undefined>(undefined);
  const isomorphicEffect = useIsomorphicEffect();
  const updateTarget = useCallback((event: MediaQueryListEvent) => setTargetReached(event.matches), []);

  isomorphicEffect((): void | (() => void) => {
    if (isomorphicEffect.name === 'useEffect') {
      const media = window.matchMedia(mediaSize[size]);
      media.addEventListener('change', updateTarget);
      setTargetReached(media.matches);

      return () => media.removeEventListener('change', updateTarget);
    }
  }, []);

  return targetReached;
};
