# Simple esbuild app

## Basics

#### Things this repo does:

- Bundles a TS app
- Rebuilds when a file changes
- Handles SVGs and CSS imports
- Includes the JS and CSS that esbuild outputs via an HTML file

#### Things this repo does not do (yet):

- CSS via Emotion
- Actually running `tsc` separately for type checking
- A normal `bin/build` file that just runs `esbuild` once (in other words, this is dev only)
- Serve things in dev via a webserver. Just do `open dist/index.html` after you have run `bin/watch`

## Building

Run `bin/watch` to run esbuild and watch for changes on the file system.

NOTE: The `index.html` file is not part of esbuild but will be copied over when `bin/watch` is first run.
