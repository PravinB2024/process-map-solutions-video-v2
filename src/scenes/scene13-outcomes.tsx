import React from 'react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {Outcomes} from '../visuals/Systems';

export const OutcomeShowcase: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="The foundation for future growth and operational improvement.">
    <Outcomes frame={frame} />
  </FilmScene>
);
