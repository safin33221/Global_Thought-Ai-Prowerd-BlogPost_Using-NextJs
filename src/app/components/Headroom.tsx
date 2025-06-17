// components/HeadroomClient.tsx
'use client';

import dynamic from 'next/dynamic';
const Headroom = dynamic(() => import('react-headroom'), { ssr: false });

export default Headroom;
