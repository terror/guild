import React from 'react';
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';

interface MotionProps {
    src: any;
}

export const Motion: React.FC<MotionProps> = ({ src }) => {
    const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
        ? undefined
        : `${spin} infinite 20s linear`;

    return <Image animation={animation} src={src} />;
};
