import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../renderer/App';

beforeAll(() => {
  (window as any).electron = {
    ipcRenderer: {
      sendMessage: jest.fn(),
      on: jest.fn().mockImplementation(() => () => {}),
      once: jest.fn(),
    },
  };
});

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
