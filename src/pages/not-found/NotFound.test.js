
import { create, act } from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';

import NotFound from './NotFound';

it('The NotFound component has been rendered as expected.', () => {
  const tree = create(<MemoryRouter><NotFound /></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('The NotFound Component => Go Back Button: ', () => {
  test('It should go back when it has clicked.', () => {
    let notFound;
    act(() => {
      notFound = create(<MemoryRouter><NotFound /></MemoryRouter>);
    });

    const testInstance = notFound.root;
    const dummyHistory = createMemoryHistory({ initialEntries: ['/age-of-empires'] });
    const goBackButton = testInstance.findByType('button');
    act(() => goBackButton.props.onClick());

    expect(dummyHistory.location.pathname).toBe('/age-of-empires');
  });
});
