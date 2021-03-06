import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const authenticated = useSelector(state => state.auth.authenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
