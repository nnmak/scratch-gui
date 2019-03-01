import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import {injectIntl} from 'react-intl';
import VM from 'scratch-vm';

import {connect} from 'react-redux';

import LocalTests from './local-tests.jsx';
import DodonaTests from './dodona-tests.jsx';

import {
    activateTab,
    TESTS_TAB_INDEX
} from '../reducers/editor-tab';

import errorBoundaryHOC from '../lib/error-boundary-hoc.jsx';

class TestsTab extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'setFileInput'
        ]);
        this.state = {};
    }

    componentWillReceiveProps (nextProps) {
        const {} = nextProps;

    }


    setFileInput (input) {
        this.fileInput = input;
    }

    render () {
        const {} = this.props;

        return (
            <div>
                <LocalTests />
                <DodonaTests />
            </div>

        );
    }
}

const mapStateToProps = state => ({
    isRtl: state.locales.isRtl
});

const mapDispatchToProps = dispatch => ({
    onActivateCostumesTab: () => dispatch(activateTab(TESTS_TAB_INDEX))
});

export default errorBoundaryHOC('Tests Tab')(
    injectIntl(connect(
        mapStateToProps,
        mapDispatchToProps
    )(TestsTab))
);
