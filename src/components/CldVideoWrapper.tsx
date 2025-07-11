'use client';

import { useEffect, useState, useRef } from 'react';

interface CldVideoWrapperProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  alt?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
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
  priority = false,
  loading = 'lazy',
}: CldVideoWrapperProps) {
  const [isCloudinaryAvailable, setIsCloudinaryAvailable] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if Cloudinary cloud name is available
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      setIsCloudinaryAvailable(false);
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

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
      ref={videoRef}
      className={className}
      autoPlay={autoplay && isIntersecting}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      preload={priority ? 'auto' : 'metadata'}
      style={{ objectFit: 'cover' }}
    >
      {isIntersecting && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
