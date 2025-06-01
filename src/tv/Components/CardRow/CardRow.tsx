// src/components/CardRow/CardRow.tsx
import React from 'react';
import { FocusNode } from '@please/lrud';
import styles from 'src/tv/Components/CardRow/CardRow.module.scss';
import Card from 'src/tv/Components/Card/Card';
import { CardRowProps } from 'src/types/types';
import useDirectionalNavigation from 'src/tv/hooks/useDirectionalNavigation';
import { noop } from 'src/shared/utils/utils';
import { CARD_VARIENT, ORIENTATION } from 'src/tv/Constants/Contants';
import DotSlider from 'src/tv/Components/DotSlider/DotSlider';

const CardRow: React.FC<CardRowProps> = (props) => {

  const { title, data, isHero } = props
  const { handleFocus, handleBlurred, parent, focusedIndex } = useDirectionalNavigation();
  const classNames = [styles.cardRow]

  if (isHero) classNames.push(styles.heroRow)

  const rowTitle = !isHero && <h2>{title}</h2>

  const cards = data.map((item, index) => (
    <Card
      dataIndex={index}
      key={index}
      item={item}
      onFocus={handleFocus}
      variant={isHero ? CARD_VARIENT.HERO : CARD_VARIENT.DEFAULT} />
  ))

  return (
    <div className={classNames.join(' ')}>
      <h1> {rowTitle}</h1>
      <FocusNode className={styles.rowContent} ref={parent} orientation={ORIENTATION.HORIZONTAL} onFocused={noop} onBlurred={handleBlurred}>
        {cards}
      </FocusNode>
      {isHero && <DotSlider activeIndex={focusedIndex} totalDots={cards.length}></DotSlider>}
    </div>
  );
};

export default React.memo(CardRow);
