import React from 'react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {ConvergenceCore} from '../visuals/Systems';

export const ProcessConvergence: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} eyebrow="Introducing" title="Process Map Solutions." centered>
    <ConvergenceCore frame={frame} />
  </FilmScene>
);
