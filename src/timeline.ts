export const FILM = {
  fps: 30,
  width: 1920,
  height: 1080,
  durationFrames: 2700,
  audioStartFrame: 2805,
  audioEndFrame: 5505,
};

export type Chapter = {
  key: string;
  start: number;
  end: number;
};

const cutSeconds = [0, 5, 11, 17, 23, 30, 34.5, 41, 46, 53.5, 60, 64.5, 70.5, 77, 87, 90];

export const chapters: Chapter[] = cutSeconds.slice(0, -1).map((start, index) => ({
  key: `chapter-${index + 1}`,
  start: Math.round(start * FILM.fps),
  end: Math.round(cutSeconds[index + 1] * FILM.fps),
}));

export const localFrame = (absoluteFrame: number, chapter: Chapter) => absoluteFrame - chapter.start;
export const chapterLength = (chapter: Chapter) => chapter.end - chapter.start;
