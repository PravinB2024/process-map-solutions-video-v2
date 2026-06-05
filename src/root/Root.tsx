import React from 'react';
import {Composition} from 'remotion';
import {LaunchFilm} from '../video/LaunchFilm';
import {FILM} from '../timeline';

export const Root: React.FC = () => (
  <Composition
    id="GallagherMohanLaunch"
    component={LaunchFilm}
    durationInFrames={FILM.durationFrames}
    fps={FILM.fps}
    width={FILM.width}
    height={FILM.height}
  />
);
