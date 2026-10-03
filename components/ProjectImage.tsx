import React from 'react';
import type { ProjectImage as ProjectImageData } from '../types';

/** Lazy-loaded project image with intrinsic dimensions so the layout does not shift. */
const ProjectImage: React.FC<{ image: ProjectImageData; className?: string }> = ({ image, className }) => (
  <img
    src={`${import.meta.env.BASE_URL}${image.src}`}
    alt={image.alt}
    width={image.width}
    height={image.height}
    loading="lazy"
    decoding="async"
    className={className}
  />
);

export default ProjectImage;
