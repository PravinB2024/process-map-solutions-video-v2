import React from 'react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {EnterpriseDashboard, ResourceDrawer} from '../visuals/Systems';

export const KnowledgePanel: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="Capture the knowledge behind every process step.">
    <EnterpriseDashboard frame={frame} active={3} scale={0.9} />
    <ResourceDrawer frame={frame} />
  </FilmScene>
);
