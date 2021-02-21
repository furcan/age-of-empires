import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import App from './App';

test('The App has been rendered without crashing.', () => {
  const div = window.document.createElement('div');
  render(<MemoryRouter><App /></MemoryRouter>, div);
  expect(div).toBeEmptyDOMElement();
});
