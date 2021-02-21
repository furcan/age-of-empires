
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Layout from './Layout';

it('The Layout component has been rendered as expected.', () => {
  const tree = renderer.create(<MemoryRouter><Layout /></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
