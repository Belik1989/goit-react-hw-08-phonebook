import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/operations';

const Registration = () => {
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const changePasswordType = e => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
      return;
    }
    setPasswordType('text');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label htmlFor="">
          Email
          <input required type="email" name="email" />
        </label>
        <label htmlFor="">
          <div>
            <span>Password</span>
            <button onClick={changePasswordType}>
              {passwordType === 'password'}
              {passwordType === 'text'}
            </button>
          </div>
          <input required type={passwordType} name="password" />
        </label>
        <label htmlFor="">
          Name
          <input required type="text" name="name" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Registration;
