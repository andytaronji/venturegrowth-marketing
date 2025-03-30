'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CldImageWrapper(props: CldImageProps) {
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

  // Use CldImage when Cloudinary is available
  return <CldImage {...props} />;
}
