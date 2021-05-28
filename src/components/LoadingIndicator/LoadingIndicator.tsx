import Spinner from 'react-bootstrap/Spinner';
import styles from './LoadingIndicator.module.scss';

const LoadingIndicator = () => <Spinner className={styles.customSpinner} animation="border" />;

export default LoadingIndicator;
