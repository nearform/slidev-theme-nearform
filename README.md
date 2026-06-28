# Nearform Slidev Theme

This repository contains the slidev theme for Nearform presentations and workshops.

# Usage

Steps to use this theme:
- Install the theme using `npm i --save slidev-theme-nearform`
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

# Light mode

The theme ships with a light palette matching the NearForm Master Base template
(white background, dark primary text). Switch the deck to light mode by setting
`colorSchema` in the headmatter:

```md
---
theme: slidev-theme-nearform
colorSchema: light
---
```

Or pin it in the deck's `package.json` so every contributor gets the same
default:

```json
{
  "slidev": {
    "colorSchema": "light"
  }
}
```

Valid values are `light`, `dark`, `both`, and `auto`. Per-slide overrides
remain available through the existing `class: light` and `class: dark`
frontmatter keys.

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
