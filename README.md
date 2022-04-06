# NearForm Slidev Theme

This repository contains the slidev theme for Nearform presentations and workshops.

# Usage

Steps to use this theme:
- Install the theme using `npm i --save slidev-theme-nearform`
- Rename your slide deck markdown file to `slides.md`
- Add these scripts to your package.json
  ```json
      "build": "slidev build",
      "start": "slidev --open",
  ```
- Add the following line to slides.md
  ```md
  ---
  theme: slidev-theme-nearform
  ---
  ```

## Extra tips

Although you shouldn't write "dense" slides, some times it can be difficult to
avoid it. In such situations, you can apply the `dense` CSS class to your
`<div>` containers, to ensure that they fit in the available vertical space.
