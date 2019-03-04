import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';

import localtestIcon from './icon--localtest.svg';
import styles from './dodonatest-button.css';

const DodonatestButton = ({
                              className,
                              onClick
                          }) => (
    <Button
        className={classNames(
            className,
            styles.communityButton
        )}
        iconClassName={styles.localtestIcon}
        iconSrc={localtestIcon}
        onClick={onClick}
    >
        <FormattedMessage
            defaultMessage="Submit to Dodona"
            description="Submit your code to Dodona and get the results of the Dodona tests"
            id="tests.runDodonaTests"
        />
    </Button>
);

DodonatestButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

DodonatestButton.defaultProps = {
    onClick: () => {
    }
};

export default DodonatestButton;
