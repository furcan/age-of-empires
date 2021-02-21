
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Home from './Home';

it('The Home component has been rendered as expected.', () => {
  const tree = create(<MemoryRouter><Home /></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
