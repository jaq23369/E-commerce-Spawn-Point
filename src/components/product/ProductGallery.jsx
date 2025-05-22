//Componente: ProductGallery
//Descripción: Este componente muestra una galería de imágenes del producto. Incluye una imagen principal destacada y miniaturas adicionales navegables.
import React, { useState } from 'react';
const ProductGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  if (!images || images.length === 0) {
    return <div className="product-gallery-empty">Sin imágenes</div>;
  }
  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={images[selectedImage]} alt={productName} />
      </div>
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Vista ${index + 1}`}
            className={selectedImage === index ? 'active' : ''}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductGallery;