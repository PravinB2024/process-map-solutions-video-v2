import {interpolate, spring} from 'remotion';

export const ease = (frame: number, input: [number, number], output: [number, number]) =>
  interpolate(frame, input, output, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const visibility = (frame: number, total: number, enter = 16, leave = 16) => {
  const intro = ease(frame, [0, enter], [0, 1]);
  const outro = ease(frame, [total - leave, total], [1, 0]);
  return Math.min(intro, outro);
};

export const bloom = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 20,
      stiffness: 110,
      mass: 0.9,
    },
  });
