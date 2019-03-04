import React from 'react';
import LocaltestButton from './localtest-button.jsx';
import LocalTests from './local-tests.jsx';
import DodonaTests from './dodona-tests.jsx';
import DodonatestButton from './dononatest-button.jsx';
import styles from './tests.css';

class Tests extends React.Component {
    constructor (props) {
        super(props);
    }

    handleClickLocalTest () {

    }

    handleClickDodonaTest () {

    }

    render () {
        return (
            <div className={styles.mainTests}>
                <div>
                    <LocaltestButton
                        className={styles.testButton}
                        /* eslint-disable react/jsx-no-bind */
                        onClick={() => {
                            this.handleClickLocalTest();
                        }}
                        /* eslint-enable react/jsx-no-bind */
                    />
                    <DodonatestButton
                        className={styles.testButton}
                        /* eslint-disable react/jsx-no-bind */
                        onClick={() => {
                            this.handleClickDodonaTest();
                        }}
                        /* eslint-enable react/jsx-no-bind */
                    />
                </div>
                <div>
                    <LocalTests/>
                    <DodonaTests/>
                </div>
            </div>
        );

    }
}

export default Tests;
