import styles from './Account.module.scss';

/**
 * Account component props
 * @param title, amount, description - account title, amount and description
 */
export interface IAccountProps {
  title: string;
  amount: string;
  description: string;
}

/**
 * Account component to display account details
 * @param title, amount, description - account title, amount and description
 * @returns React component to display account details
 */
function Account({ title, amount, description }: IAccountProps) {
  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{title}</h3>
        <p className={styles.accountAmount}>{amount}</p>
        <p className={styles.accountAmountDescription}>{description}</p>
      </div>
      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <button type="button" className={styles.transactionButton}>
          View transactions
        </button>
      </div>
    </section>
  );
}

export default Account;
