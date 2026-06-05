# Gallagher & Mohan Process Map Solutions Launch

Brand-new Remotion prototype for a 90-second enterprise SaaS launch film.

## Run

```bash
npm install
npm run dev
```

## Render

```bash
npm run render
```

The rendered MP4 is written to `out/gallagher-mohan-process-map-solutions.mp4`.

## Music Timing

`public/music.mp3` is 183.51 seconds long. The composition uses the final 90 seconds of the track, from 93.51s to 183.51s, so the final logo hold resolves with the end of the music.

Scene cuts are aligned to detected energy changes and accents in that final segment:

`0, 5, 11, 17, 23, 30, 34.5, 41, 46, 53.5, 60, 64.5, 70.5, 77, 87, 90`

## Specs

- Remotion + React + TypeScript
- Motion for React
- 1920x1080
- 30fps
- 90 seconds
- White / light corporate Gallagher & Mohan blue theme
