import React, { useEffect, useMemo } from 'react';
import { FocusNode, useSetFocus } from '@please/lrud';
import styles from 'src/tv/Pages/Home/Home.module.scss';
import CardRow from 'src/tv/Components/CardRow/CardRow';
import { generateHomePageData, noop } from 'src/shared/utils/utils';
import { ORIENTATION } from 'src/tv/Constants/Contants';
import { useDataContext } from 'src/tv/hooks/useDataContext';

const HOME_FOCUS_ID = 'home'

const Home: React.FC = () => {

  const { data, loading, error } = useDataContext();

  const setFocus = useSetFocus();

  useEffect(() => {
    setFocus(HOME_FOCUS_ID);
  }, [setFocus]);

  const rows = useMemo(() => generateHomePageData(data), [data]);
  const homeRows = rows.map((row, index) => (
    row.data && <CardRow key={index} title={row.title} data={row.data} onFocus={noop} isHero={row.isHero} />
  ))

  if (loading) {
    return (<div>Loading... </div>)
  }
  if (error) {
    return (<div> {error} </div>)
  }

  return (
    <div className={styles.home} >
      <FocusNode orientation={ORIENTATION.VERTICAL} focusId={HOME_FOCUS_ID} className={styles.appContent}>
        {homeRows}
      </FocusNode>
    </div>
  );
};

export default Home;

