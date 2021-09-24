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
      loadingSrc={loadingSrc}
      actualSrc={actualSrc}
      loading={!isImageLoaded}
      error={hasError}
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
