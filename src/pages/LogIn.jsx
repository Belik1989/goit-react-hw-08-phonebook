import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';

const LogIn = () => {
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  const changePasswordType = e => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
      return;
    }
    setPasswordType('text');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <label htmlFor="">
          Email
          <input required name="email" type="text"></input>
        </label>
        <label htmlFor="">
          <div>
            <span>Password</span>
            <button onClick={changePasswordType}>
              {passwordType === 'password'}
              {passwordType === 'text'}
            </button>
          </div>
          <input required name="password" type={passwordType}></input>
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
