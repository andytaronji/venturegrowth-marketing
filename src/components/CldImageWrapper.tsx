'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface OptimizedCldImageProps extends CldImageProps {
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

export default function CldImageWrapper(props: OptimizedCldImageProps) {
  const [isCloudinaryAvailable, setIsCloudinaryAvailable] = useState(true);

  useEffect(() => {
    // Check if Cloudinary cloud name is available
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      setIsCloudinaryAvailable(false);
    }
  }, []);

  if (!isCloudinaryAvailable) {
    // Fallback to a placeholder or local image
    return (
      <div 
        className={props.className}
        style={{ 
          backgroundColor: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Image placeholder</p>
          <p style={{ fontSize: '12px', color: '#6b7280' }}>{props.alt}</p>
        </div>
      </div>
    );
  }

  // Enhanced props for mobile performance
  const optimizedProps: CldImageProps = {
    ...props,
    // Force WebP format with fallback
    format: 'auto',
    quality: 'auto:best',
    // Add responsive sizing if not provided
    sizes: props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    // Enable lazy loading by default unless priority is set
    loading: props.priority ? 'eager' : (props.loading || 'lazy'),
    // Add mobile-specific optimizations
    dpr: 'auto',
    // Add fetch priority for above-the-fold images
    fetchPriority: props.priority ? 'high' : 'auto',
  };

  // Use CldImage when Cloudinary is available
  return <CldImage {...optimizedProps} />;
}
