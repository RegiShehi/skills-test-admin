import React, { ReactNode } from 'react';
import styles from './MainContent.module.scss';

interface IProps {
  children: ReactNode;
}

const MainContent: React.FC<IProps> = ({ children }) => <div className={styles.mainContent}>{children}</div>;

export default MainContent;
