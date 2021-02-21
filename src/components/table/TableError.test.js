
import renderer from 'react-test-renderer';

import TableError from './TableError';

it('The TableError component has been rendered as expected.', () => {
  const tree = renderer.create(<TableError />).toJSON();
  expect(tree).toMatchSnapshot();
});
