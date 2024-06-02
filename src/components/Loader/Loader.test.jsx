import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('Should render Loader component', async () => {
    render(<Loader />);

    const element = await screen.findByTestId('loading');
    expect(element).toBeInTheDocument();
  });
});
