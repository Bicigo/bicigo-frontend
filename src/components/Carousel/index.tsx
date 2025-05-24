import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import './styles.css';

interface ImageCarouselProps {
  images: string[];
}

interface ProductCarouselProps {
  products: Array<{
    id: number;
    image: string;
    name: string;
    price: number;
  }>;
  maxVisible?: number;
}

type CarouselProps = ImageCarouselProps | ProductCarouselProps;

const isImageCarousel = (props: CarouselProps): props is ImageCarouselProps => {
  return 'images' in props;
};

const Carousel: React.FC<CarouselProps> = (props) => {
  if (isImageCarousel(props)) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { images } = props;

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="image-carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &lt;
        </button>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="carousel-image"
        />
        <button className="carousel-button next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    );
  } else {
    const { products, maxVisible = 4 } = props;
    const visibleProducts = products.slice(0, maxVisible);

    return (
      <div className="product-carousel">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
};

export default Carousel; 