import { useEffect, useState } from 'react';

interface Props {
  progressBar: number;
}
const ProgressBar = ({ progressBar }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progressBar);
    }, 1200);
    return () => clearTimeout(timer);
  }, [setProgress]);

  return (
    <div className="progress">
      <div
        className="progress-bar wow fadeInLeft"
        style={{
          width: `${progress}%`,
        }}>
        <span>{progress}%</span>
      </div>
      <div className="lead">
        Plumbing <span>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
