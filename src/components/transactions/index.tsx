import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Account from '~/components/account';
import styles from '~/components/transactions/Transactions.module.scss';
import { getUser } from '~/services';

/**
 * Transactions page component
 * @returns React component that renders the transactions page
 */
function Transactions() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });
  const handleClick = () => {
    navigate('/profile', { replace: true });
  };
  useEffect(() => {
    (async () => {
      const data = await getUser();
      setUser(data.body);
    })();
  }, []);
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {user ? user.firstName : ''} {user ? user.lastName : ''}
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
