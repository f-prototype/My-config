import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { BugButton } from './providers/ErrorBoundary';

export function App() {
  return (
      <div className="App">
          <BugButton />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <AppRouter />
      </div>
  );
}
