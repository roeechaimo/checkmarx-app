import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Image from './Image';

const mockImage = 'http://localhost/icons8-java-50.png';
const mockFallbackImage = 'http://localhost/icons8-python-50.png';
const mockAltText = 'mock alt text';
const mockStyle = { width: 15, height: 15 };

describe('Image', () => {
  it('Should render Image component with a valid src prop', async () => {
    render(<Image src={mockImage} />);

    const element = await screen.findByTestId('image');

    expect(element).toBeInTheDocument();
    expect(element).toHaveProperty('src', mockImage);
  });

  it('Should render Image component with a default fallback image', async () => {
    render(<Image src={''} />);

    const element = await screen.findByTestId('image');
    expect(element).toBeInTheDocument();
    expect(element).toHaveProperty(
      'src',
      'http://localhost/icons8-unknown-60.png'
    );
  });

  it('Should render Image component with a valid fallback image when src is not valid', async () => {
    render(
      <Image
        src={''}
        fallbackImage={mockFallbackImage}
      />
    );

    const element = await screen.findByTestId('image');
    expect(element).toBeInTheDocument();
    expect(element).toHaveProperty('src', mockFallbackImage);
  });

  it('Should render Image component with a default alt text', async () => {
    render(<Image src={mockImage} />);

    const element = await screen.findByTestId('image');
    expect(element).toBeInTheDocument();
    expect(element).toHaveProperty('alt', 'Unknown');
  });

  it('Should render Image component with a valid alt text', async () => {
    render(
      <Image
        src={''}
        altText={mockAltText}
      />
    );

    const element = await screen.findByTestId('image');
    expect(element).toBeInTheDocument();
    expect(element).toHaveProperty('alt', mockAltText);
  });

  it('Should render Image component with a default style', async () => {
    render(<Image src={mockImage} />);

    const element = await screen.findByTestId('image');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('h-12 w-12');
  });

  it('Should render Image component with a valid style', async () => {
    render(
      <Image
        src={mockImage}
        {...mockStyle}
      />
    );

    const element = await screen.findByTestId('image');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('h-15 w-15');
  });
});
