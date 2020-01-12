import React from 'react';
import styles from './App.module.css';
import * as england from './england';

const App: React.FC = () => {
    const startYear = 1000;
    const years = Array.from({length: 800}, (value, index) => startYear + index);

    return (
        <div className={styles.app}>
            <div className={styles.line}></div>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Ruler</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {years.map(year =>
                        <tr key={year}>
                            <td>{year}</td>
                            <td>{england.getRulerName(year)}</td>
                            <td>{england.getEventName(year)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default App;
