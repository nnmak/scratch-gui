import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';

import localtestIcon from './icon--localtest.svg';
import styles from './localtest-button.css';

const LocaltestButton = ({
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
            defaultMessage="Test project"
            description="Run tests locally before submitting to Dodona"
            id="tests.runLocalTests"
        />
    </Button>
);

LocaltestButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

LocaltestButton.defaultProps = {
    onClick: () => {
    }
};

export default LocaltestButton;
