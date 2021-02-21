
import renderer from 'react-test-renderer';

import TableNoData from './TableNoData';

it('The TableNoData component has been rendered as expected.', () => {
  const tree = renderer.create(<TableNoData />).toJSON();
  expect(tree).toMatchSnapshot();
});
