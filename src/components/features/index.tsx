import styles from './Features.module.scss';

/**
 * Features component props
 * @param iconSrc, iconName, title, parargaph - feature item props
 */
export interface IFeaturesProps {
  iconSrc: any;
  iconName: string;
  title: string;
  paragraph: string;
}

/**
 * Feature item component
 * @param iconSrc, iconName, title, parargaph - feature item props
 * @returns React component for feature item
 */
function features({ iconSrc, iconName, title, paragraph }: IFeaturesProps) {
  return (
    <div className={styles.featureItem}>
      <img src={iconSrc} alt={iconName} className={styles.featureIcon} />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

export default features;
