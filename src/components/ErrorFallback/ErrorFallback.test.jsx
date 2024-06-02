import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorFallback from './ErrorFallback';

const errorMock = new Error('mock error');

describe('ErrorFallback', () => {
  it('Should render ErrorFallback component and display the correct error message', async () => {
    render(<ErrorFallback error={errorMock} />);

    const messageElement = await screen.findByTestId('message');

    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveTextContent(errorMock.message);
  });
});
