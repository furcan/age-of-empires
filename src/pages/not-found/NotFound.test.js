
import { create, act } from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';

import NotFound from './NotFound';

it('The NotFound component has been rendered as expected.', () => {
  const tree = create(<MemoryRouter><NotFound /></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
