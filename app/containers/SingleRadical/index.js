/*
 *
 * SingleRadical
 *
 */

import React from 'react';
// import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSingleRadical from './selectors';
import messages from './messages';
import { Radical } from '../../models/radical';

const RADICALS = Radical.singleAll();

export class SingleRadical extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <ul>
          {RADICALS.map((radical, i) => <li key={i}>{radical.toString()}</li>)}
        </ul>
      </div>
    );
  }
}

SingleRadical.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SingleRadical: makeSelectSingleRadical(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRadical);
