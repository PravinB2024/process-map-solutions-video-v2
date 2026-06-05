import React from 'react';
import {motion} from 'motion/react';
import {visibility, ease} from '../motion';

export type SceneProps = {
  frame: number;
  duration: number;
  fps: number;
};

export const BrandLockup: React.FC<{compact?: boolean}> = ({compact = false}) => (
  <div className={compact ? 'brand-lockup compact' : 'brand-lockup'}>
    <div className="brand-tile">G&amp;M</div>
    {!compact && (
      <div className="brand-copy">
        <strong>Gallagher &amp; Mohan</strong>
        <span>Real Service Through Global Systems</span>
      </div>
    )}
  </div>
);

export const FilmScene: React.FC<
  React.PropsWithChildren<{
    frame: number;
    duration: number;
    title?: React.ReactNode;
    eyebrow?: string;
    centered?: boolean;
    quietBrand?: boolean;
  }>
> = ({frame, duration, title, eyebrow, centered = false, quietBrand = false, children}) => {
  const opacity = visibility(frame, duration);
  const copyY = ease(frame, [0, 28], [30, 0]);
  const blur = ease(frame, [duration - 12, duration], [0, 10]);

  return (
    <motion.section className={centered ? 'film-scene centered' : 'film-scene'} style={{opacity, filter: `blur(${blur}px)`}}>
      {!quietBrand && <BrandLockup compact />}
      <div className="blue-grid" />
      {title && (
        <motion.div className="scene-headline" style={{transform: `translateY(${copyY}px)`}}>
          {eyebrow && <p>{eyebrow}</p>}
          <h1>{title}</h1>
        </motion.div>
      )}
      {children}
    </motion.section>
  );
};

export const BlueChip: React.FC<React.PropsWithChildren<{className?: string}>> = ({className = '', children}) => (
  <div className={`blue-chip ${className}`}>{children}</div>
);
