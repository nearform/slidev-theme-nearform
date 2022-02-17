# NearForm Slidev Theme

This repository contains the slidev theme for Nearform presentations and workshops.

# Usage

Steps to use this theme:
- Install the theme using `npm i --save @nearform/slidev-theme-nearform`
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
