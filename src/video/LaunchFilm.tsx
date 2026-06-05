import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {chapters, chapterLength, FILM, localFrame} from '../timeline';
import {
  ActivityDrilldown,
  Burden,
  ConnectedEcosystem,
  Coverage,
  DashboardReveal,
  DepartmentNavigation,
  DocumentationGrowth,
  FinalLogo,
  HeroSystem,
  KnowledgePanel,
  OutcomeShowcase,
  ProcessConvergence,
  ProcessFlythrough,
  ProcessSpecialist,
  ScatteredKnowledge,
} from '../scenes';

const scenes = [
  ScatteredKnowledge,
  DocumentationGrowth,
  Burden,
  ProcessConvergence,
  Coverage,
  ProcessSpecialist,
  DashboardReveal,
  DepartmentNavigation,
  ProcessFlythrough,
  ActivityDrilldown,
  KnowledgePanel,
  ConnectedEcosystem,
  OutcomeShowcase,
  HeroSystem,
  FinalLogo,
];

export const LaunchFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill className="film">
      <Audio src={staticFile('music.mp3')} startFrom={FILM.audioStartFrame} endAt={FILM.audioEndFrame} />
      {scenes.map((Scene, index) => {
        const chapter = chapters[index];
        return (
          <Sequence key={chapter.key} from={chapter.start} durationInFrames={chapterLength(chapter)}>
            <Scene frame={localFrame(frame, chapter)} duration={chapterLength(chapter)} fps={fps} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
