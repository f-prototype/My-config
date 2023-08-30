import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export function App() {
  return (
      <div className="App">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <AppRouter />
      </div>
  );
}
