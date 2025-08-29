import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * AudioPlayer
 * Props:
 *  - srcPath: string (path under static, defaults to '/sons/extrait-apologie.mp3')
 */
export default function AudioPlayer({ srcPath = '/sons/extrait-apologie.mp3' }) {
  const src = useBaseUrl(srcPath);
  return (
    <audio controls src={src} preload="metadata" style={{ maxWidth: '100%' }} />
  );
}
