import React, {useEffect, useState} from 'react';
import styles from './Scrollbar.module.css';
import {TimeSpan} from './Window';

type ScrollbarProps = {
    startYear: number,
    endYear: number,
    windowTimeSpan: TimeSpan,
};

const Scrollbar: React.FC<ScrollbarProps> = ({startYear, endYear, windowTimeSpan}) => {
    const [scrollbarContainerWidth, setScrollbarWidth] = useState<number | undefined>(0);
    const timeSpan = endYear - startYear;
    const unitSize = 100;
    const years = Array.from({length: timeSpan / unitSize}, (value, index) => startYear + index * unitSize);
    const scrollbarDomObject =  React.createRef<HTMLDivElement>();

    useEffect(() => {
       setScrollbarWidth(scrollbarDomObject.current?.offsetWidth);
    }, [scrollbarDomObject]);

    return (
        <div className={styles.scrollbarContainer} style={{width: scrollbarContainerWidth}}>
            <div className={styles.scrollbar} ref={scrollbarDomObject}>
                <div className={styles.handle} style={{
                    width: scrollbarContainerWidth,
                    top: (windowTimeSpan.startYear - startYear) / timeSpan * 100 + '%',
                    height: (windowTimeSpan.endYear - windowTimeSpan.startYear) / timeSpan * 100 + '%',
                }}></div>
                {years.map(year =>
                    <div key={year}>{year}</div>
                )}
                <div>{endYear}</div>
            </div>
        </div>
    );
};

export default Scrollbar;