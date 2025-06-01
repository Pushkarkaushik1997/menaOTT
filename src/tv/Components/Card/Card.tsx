// src/components/Card/Card.tsx
import React, { useRef } from 'react';
import { FocusNode } from '@please/lrud';
import { useNavigate } from 'react-router-dom';
import styles from 'src/tv/Components/Card/Card.module.scss';
import { CardProps } from 'src/types/types';
import { PATHS } from 'src/tv/routesPaths';
import { CARD_VARIENT, FALLBACK_IMG_URL } from 'src/tv/Constants/Contants';
import { loadFallbackImg } from 'src/shared/utils/utils';


const Card: React.FC<CardProps> = ({ item, onFocus, dataIndex = 0, variant = CARD_VARIENT.DEFAULT }) => {
  const classNames = [styles.card];
  const isHero = variant === CARD_VARIENT.HERO
  if (isHero) {
    classNames.push(styles.heroCard);
  }

  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <FocusNode
      className={classNames.join(' ')}
      data-index={dataIndex}
      focusedClass={`${classNames.join(' ')} ${!isHero ? styles.focused : styles.focusedHeroCard}`}
      onFocused={onFocus}
      onSelected={() => {
        navigate(PATHS.DETAIL, { state: { item } });
      }}
    >
      <div
        className={styles.cardContent}
        style={{
          backgroundImage: `url(${item.image || FALLBACK_IMG_URL})`
        }} ref={cardRef}>

        {isHero && <div className={styles.imageContainer}>
          <img
            src={item.image}
            alt={item.title}
            width={200}
            height={300}
            loading="lazy"
            decoding="async"
            onError={(e) => loadFallbackImg(e, FALLBACK_IMG_URL)}
          />
        </div>}

        {isHero && <div className={styles.heroText}>
          <h1>{item.title}</h1>
          <p className={styles.heroDescription}>{item.description}</p>
        </div>}

      </div>
    </FocusNode>
  );
};

export default React.memo(Card);
