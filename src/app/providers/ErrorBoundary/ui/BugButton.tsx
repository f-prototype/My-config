import { useEffect, useState } from 'react';
import cls from './BugButton.module.scss';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error('test bug');
    }
  }, [error]);

  return (
      <button
        type="button"
        className={cls.BugButton}
        onClick={onThrow}
      >
          Throw error
      </button>
  );
};
