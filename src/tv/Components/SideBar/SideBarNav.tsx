import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FocusNode } from '@please/lrud';
import styles from 'src/tv/Components/SideBar/SidebarNav.module.scss';
import { ORIENTATION } from 'src/tv/Constants/Contants';
import { PATHS } from 'src/tv/routesPaths';

interface SidebarNavProps {
  onFocus: () => void;
  onBlur: () => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ onFocus, onBlur }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', path: PATHS.HOME, icon: '🏠' },
    { label: 'Settings', path: PATHS.SETTINGS, icon: '⚙️' },
  ];

  const handleFocus = () => {
    setIsExpanded(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (sidebarRef.current && !sidebarRef.current.contains(document.activeElement)) {
      setIsExpanded(false);
      if (onBlur) {
        onBlur();
      }
    }
  };

  return (
    <nav
      className={`${styles.sidebarNav} ${isExpanded ? styles.expanded : ''}`}
      aria-label="Main Navigation"
      ref={sidebarRef}
    >
      <FocusNode orientation={ORIENTATION.HORIZONTAL} className={styles.navList}>
        {menuItems.map((item, index) => (
          <FocusNode
            key={index}
            className={styles.navItem}
            focusedClass={`${styles.navItem} ${styles.focused}`}
            activeClass={`${styles.navItem} ${styles.active}`}
            onFocused={handleFocus}
            onBlurred={handleBlur}
            onSelected={() => navigate(item.path)}
          >
            <div className={styles.navLink}>
              <span className={styles.label}>{item.label}</span>
            </div>
          </FocusNode>
        ))}
      </FocusNode>
    </nav>
  );
};


export default SidebarNav;
