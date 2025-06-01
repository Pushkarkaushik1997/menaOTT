import React from 'react';
import { FocusNode } from '@please/lrud';
import SidebarNav from 'src/tv/Components/SideBar/SideBarNav';
import styles from 'src/tv/Components/Layout/Layout.module.scss';
import { ORIENTATION } from 'src/tv/Constants/Contants';
import useSplashScreen from 'src/tv/hooks/useSplashScreen';
import Splash from 'src/tv/Components/Splash/Splash';
interface LayoutProps {
  isSidebarExpanded: boolean;
  handleSidebarFocus: () => void;
  handleSidebarBlur: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  isSidebarExpanded,
  handleSidebarFocus,
  handleSidebarBlur,
  children,
}) => {
  const { showSplash } = useSplashScreen()

  if (showSplash) {
    return (<Splash />)
  }

  return (
    <FocusNode orientation={ORIENTATION.VERTICAL} className={styles.app}>
      <SidebarNav onFocus={handleSidebarFocus} onBlur={handleSidebarBlur} />
      <div
        className={`${styles.content} ${isSidebarExpanded ? styles.expanded : styles.collapsed
          }`}
      >
        {children}
      </div>
    </FocusNode>
  );
};

export default Layout;
