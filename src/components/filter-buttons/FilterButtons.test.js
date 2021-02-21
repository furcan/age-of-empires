
import renderer from 'react-test-renderer';

import FilterButtons from './FilterButtons';

it('The FilterButtons component has been rendered as expected.', () => {
  const tree = renderer.create(<FilterButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
