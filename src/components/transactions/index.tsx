import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Account from '~/components/account';
import { IGetUser } from '~/types';
import { fetchUser, fetchProfile, profileToggleForm } from '~/store/actions';
import { useTypedDispatch, useTypedSelector } from '~/store/hooks';
import styles from '~/components/transactions/Transactions.module.scss';

/**
 * Transactions page component
 * @returns React component that renders the transactions page
 */
function Transactions() {
  const {
    register,
    reset,
    setFocus,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: { firstName: '', lastName: '' },
  });
  const dispatch = useTypedDispatch();
  const { user } = useTypedSelector((state) => state.user);
  const loading = useTypedSelector((state) => state.user.loading);
  const error = useTypedSelector((state) => state.user.error);
  const profileForm = useTypedSelector((state) => state.profile.profileForm);
  // FIXME: setFocus not working
  const onClick = () => {
    dispatch(profileToggleForm());
    reset(user);
    setFocus('firstName');
  };
  const onSubmit: SubmitHandler<IGetUser> = async (data: IGetUser) => {
    const { firstName, lastName } = data;
    firstName && lastName && (await dispatch(fetchProfile(data)));
    await dispatch(fetchUser());
    dispatch(profileToggleForm());
  };
  useEffect(() => {
    setFocus('firstName');
    (async () => {
      await dispatch(fetchUser());
    })();
  }, [setFocus, dispatch]);
  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {profileForm && user?.firstName} {profileForm && user?.lastName}
        </h1>
        {profileForm && (
          <button type="button" onClick={onClick} className={styles.editButton}>
            Edit Name
          </button>
        )}
        {!profileForm && (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
              <input type="text" {...register('firstName')} />
              <input type="text" {...register('lastName')} />
            </div>
            <div>
              <button type="submit">Save</button>
              <button type="button" onClick={onClick}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default Transactions;
