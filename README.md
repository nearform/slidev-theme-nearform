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

### Intro slide

If you want to have an image in the intro slide, you can modify the `slides.md`
header section:

```md
---
theme: slidev-theme-nearform
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
```

The URL used in this example will return a different image every time, selected
from a curated collection. But, ideally, you should set a local file path for
the specified image.

If you don't want to set an image, use `layout: default`.
