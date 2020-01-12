import React, {useState} from 'react';
import styles from './App.module.css';
import Window from './Window';
import Scrollbar from './Scrollbar';

const App: React.FC = () => {
    const [windowTimeSpan, setWindowTimeSpan] = useState({startYear: 0, endYear: 0});

    return (
        <div className={styles.app}>
            <Scrollbar startYear={1200} endYear={1800} windowTimeSpan={windowTimeSpan}/>
            <Window startYear={1200} endYear={1800} onTimeSpanChange={setWindowTimeSpan}/>
        </div>
    );
};

export default App;
