import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { SingleRadical } from '../index';
import messages from '../messages';

describe('<SingleRadical />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <SingleRadical />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
