import React from 'react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {EnterpriseDashboard} from '../visuals/Systems';

export const DepartmentNavigation: React.FC<SceneProps> = ({frame, duration}) => {
  const active = Math.min(5, Math.floor((frame / duration) * 6));
  return (
    <FilmScene frame={frame} duration={duration} title={<><span>View every department.</span><br />Every workflow.<br />Every process.</>}>
      <EnterpriseDashboard frame={frame} active={active} scale={1.03} />
    </FilmScene>
  );
};
