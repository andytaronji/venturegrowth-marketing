'use client';

import { useEffect, useState } from 'react';

interface CldVideoWrapperProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  alt?: string;
}

export default function CldVideoWrapper({
  src,
  className = '',
  loop = true,
  autoplay = true,
  muted = true,
  controls = false,
  playsInline = true,
  alt = 'Video content',
}: CldVideoWrapperProps) {
  const [isCloudinaryAvailable, setIsCloudinaryAvailable] = useState(true);

  useEffect(() => {
    // Check if Cloudinary cloud name is available
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      setIsCloudinaryAvailable(false);
    }
  }, []);

  if (!isCloudinaryAvailable) {
    // Fallback to a placeholder
    return (
      <div 
        className={className}
        style={{ 
          backgroundColor: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Video placeholder</p>
          <p style={{ fontSize: '12px', color: '#6b7280' }}>Video content</p>
        </div>
      </div>
    );
  }

  // Use native video element for better control over looping and autoplay
  return (
    <video
      className={className}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      style={{ objectFit: 'cover' }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
