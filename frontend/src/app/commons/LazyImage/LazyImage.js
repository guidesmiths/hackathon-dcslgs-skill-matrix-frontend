import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './LazyImage.styled';

const LazyImage = ({ loadingSrc, actualSrc }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setHasError(true);
    img.src = actualSrc;
  }, [actualSrc]);
  return (
    <StyledImage
      actualSrc={actualSrc}
      error={hasError}
      loading={!isImageLoaded}
      loadingSrc={loadingSrc}
    />
  );
};

LazyImage.defaultProps = {
  loadingSrc: null,
};
LazyImage.propTypes = {
  actualSrc: PropTypes.string.isRequired,
  loadingSrc: PropTypes.string,
};

export default LazyImage;
