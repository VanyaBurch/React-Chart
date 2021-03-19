import React from 'react';
import Chart from './Chart';

const App = () => {
    return (
        <div style={ { display: 'flex', justifyContent: 'center' } }>
            <div style={ { width: '70%' } }>
                <div>Robot-Chart</div>
                <Chart />
            </div>
        </div>
    );
};

export default App;