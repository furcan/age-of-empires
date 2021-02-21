
import renderer from 'react-test-renderer';

import Footer from './Footer';

it('The Footer component has been rendered as expected.', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
