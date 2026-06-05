import React from 'react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {CoverageGrid} from '../visuals/Systems';

export const Coverage: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="Built exclusively for real estate companies.">
    <CoverageGrid frame={frame} />
  </FilmScene>
);
