
import renderer from 'react-test-renderer';

import FilterRanges from './FilterRanges';

it('The FilterRanges component has been rendered as expected.', () => {
  const tree = renderer.create(<FilterRanges />).toJSON();
  expect(tree).toMatchSnapshot();
});
