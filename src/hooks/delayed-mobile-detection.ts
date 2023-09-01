import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export function useDelayedMobileDetection() {
  const [hideUntilValidated, setHideUntilValidated] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!isMobile) {
        setHideUntilValidated(true);
      }
    });
  }, []);

  return hideUntilValidated;
}
