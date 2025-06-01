import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FocusNode } from '@please/lrud';
import styles from 'src/tv/Pages/Details/Detail.module.scss';
import { PATHS } from 'src/tv/routesPaths';

const Detail: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const item = location.state?.item;

    const handlePlay = () => {
        console.log("handle play", item)
        navigate(PATHS.PLAYER, { state: { source: item.source } });
    };

    return (
        <div className={styles.detail}>
            <div className={styles.banner}>
                <img
                    src={item.banner}
                    alt="Banner"
                    className={styles.bannerImage}
                />

                <div className={styles.overlay}></div>

                <div className={styles.bannerContent}>
                    <div className={styles.leftContent}>

                        <h1 className={styles.title}>{item.title}</h1>

                        <p className={styles.description}>
                            {item.description}
                        </p>

                        <div className={styles.badges}>
                            <img
                                src="https://e7.pngegg.com/pngimages/381/444/png-clipart-4k-resolution-logo-ultra-hd-blu-ray-ultra-high-definition-television-others-television-angle.png"
                                alt="4K"
                                className={styles.badge}
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Dolby_Atmos.svg/600px-Logo_Dolby_Atmos.svg.png?20140926104436"
                                alt="Dolby"
                                className={styles.badge}
                            />
                        </div>

                        <FocusNode onSelected={handlePlay} focusedClass={styles.playButtonFocussed}>
                            <button className={styles.playButton}>Start Playing</button>
                        </FocusNode>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
