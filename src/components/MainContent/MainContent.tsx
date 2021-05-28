import React, { ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './MainContent.module.scss';

interface IProps {
  children: ReactNode;
}

const MainContent: React.FC<IProps> = ({ children }) => (
  <Container className={styles.mainContent}>{children}</Container>
);

export default MainContent;
