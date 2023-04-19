import chat from '~/assets/icon-chat.png';
import money from '~/assets/icon-money.png';
import security from '~/assets/icon-security.png';
import styles from './Home.module.scss';
import Features from '~/components/features';

/**
 * Home page component
 * @returns React component for the home page
 */
function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <section className={styles.heroContent}>
          <h2 className={styles.srOnly}>Promoted content</h2>
          <p className={styles.subtitle}>No fees</p>
          <p className={styles.subtitle}>No minimum deposit</p>
          <p className={styles.subtitle}>High interest rates</p>
          <p className={styles.text}>
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className={styles.features}>
        <Features
          iconSrc={chat}
          iconName="chat"
          title="You are our #1 priority"
          paragraph="'Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.'"
        />
        <Features
          iconSrc={money}
          iconName="money"
          title="More savings means higher rates"
          paragraph="The more you save with us, the higher your interest rate will be!"
        />
        <Features
          iconSrc={security}
          iconName="security"
          title="Security you can trust"
          paragraph="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}

export default Home;
