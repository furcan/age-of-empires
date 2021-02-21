
import renderer from 'react-test-renderer';

import TableUnits from './TableLoading';

it('The TableUnits component has been rendered as expected.', () => {
  const tree = renderer.create(<TableUnits />).toJSON();
  expect(tree).toMatchSnapshot();
});
