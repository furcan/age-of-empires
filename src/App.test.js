import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<BrowserRouter><App /></BrowserRouter>, div);
  expect(div).toBeEmptyDOMElement();
});
