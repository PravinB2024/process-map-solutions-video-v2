import React from 'react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {FlowRail} from '../visuals/Systems';

export const ProcessSpecialist: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title={<><span>A Dedicated Process Map Specialist Assigned To Your Account.</span><br />A Proven Process.</>}>
    <FlowRail frame={frame} labels={['Discovery', 'Build', 'Review', 'Maintain']} />
  </FilmScene>
);
