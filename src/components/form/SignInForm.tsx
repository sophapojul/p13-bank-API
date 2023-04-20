import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import styles from '~/components/form/Form.module.scss';
import { ISignIn, IUser } from '~/types';
import { login } from '~/store/actions';
import { useTypedDispatch, useTypedSelector } from '~/store/hooks';
import FormField from '~/components/form/formField';

/**
 * Form to sign in
 * @returns React component for signing in
 */
function SignInForm() {
  const { register, reset, setFocus, handleSubmit } = useForm<IUser>();

  const label = 'Sign In';
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const redirectPath = '/user';
  const loading = useTypedSelector((state) => state.auth.loading);
  const error = useTypedSelector((state) => state.auth.error);
  const onSubmit = async (credentials: ISignIn) => {
    await dispatch(login(credentials));
    reset();
    navigate(redirectPath, { replace: true });
  };
  useEffect(() => {
    setFocus('email');
  }, []);
  return loading ? (
    <h2>Sign In Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <i className="fa fa-user-circle"></i>
        <h1>{label}</h1>
        <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="email"
            label="Email"
            type="email"
            register={register}
            // rules={{ required: 'this field is required' }}
          />
          <FormField
            id="password"
            label="Password"
            type="password"
            register={register}
            // rules={{ required: 'this field is required' }}
          />
          <fieldset className={styles.inputRemember}>
            <input type="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
          </fieldset>
          <button type="submit" className={styles.signInButton}>
            {label}
          </button>
        </form>
      </section>
    </main>
  );
}
export default SignInForm;
