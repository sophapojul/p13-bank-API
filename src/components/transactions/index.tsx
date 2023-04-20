import { useEffect } from 'react';

import Account from '~/components/account';
import { fetchUser } from '~/store/actions';
import { useTypedDispatch, useTypedSelector } from '~/store/hooks';
import styles from '~/components/transactions/Transactions.module.scss';

/**
 * Transactions page component
 * @returns React component that renders the transactions page
 */
function Transactions() {
  const dispatch = useTypedDispatch();
  const signedInUser = useTypedSelector((state) => state.user);
  const loading = useTypedSelector((state) => state.user.loading);
  const error = useTypedSelector((state) => state.user.error);
  const handleClick = () => {};
  useEffect(() => {
    (async () => {
      dispatch(fetchUser());
    })();
  }, [dispatch]);
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
          {signedInUser.user?.firstName} {signedInUser.user?.lastName}
        </h1>
        <button
          type="button"
          onClick={handleClick}
          className={styles.editButton}
        >
          Edit Name
        </button>
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
