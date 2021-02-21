
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Header from './Header';

it('The Header component has been rendered as expected.', () => {
  const tree = renderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
