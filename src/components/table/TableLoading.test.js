
import renderer from 'react-test-renderer';

import TableLoading from './TableLoading';

it('The TableLoading component has been rendered as expected.', () => {
  const tree = renderer.create(<TableLoading />).toJSON();
  expect(tree).toMatchSnapshot();
});
