import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <header>
      <section>
        <div>
          <button type="button" to="/">
            Home
          </button>
          {isLoggedIn && <button>Contacts</button>}
        </div>
        {isLoggedIn ? (
          <div>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        ) : (
          <div>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </div>
        )}
      </section>
    </header>
  );
};

export default Menu;
