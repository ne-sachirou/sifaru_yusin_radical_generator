/*
 *
 * SifaruDeku
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { kekuriaDeku } from './actions';
import makeSelectSifaruDeku, { makeSelectDekuga } from './selectors';
import messages from './messages';
import KekuriaButton from './KekuriaButton';

export class SifaruDeku extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.dekuga.isEmpty()) this.props.onClickKekuria();
  }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <div>
          <KekuriaButton onClick={this.props.onClickKekuria}>
            <FormattedMessage {...messages.kekuria} />
          </KekuriaButton>
        </div>
        {this.props.dekuga.map((deku) => <div key={deku}>{deku}</div>)}
      </div>
    );
  }
}

SifaruDeku.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onClickKekuria: React.PropTypes.func,
  dekuga: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  SifaruDeku: makeSelectSifaruDeku(),
  dekuga: makeSelectDekuga(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onClickKekuria: (evt) => {
      if (evt) {
        evt.preventDefault();
        evt.stopPropagation();
      }
      dispatch(kekuriaDeku());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SifaruDeku);
