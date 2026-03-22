# Body Region Explorer — Image & URL Task List

Use this to track which pictures and links you want to add to each body region's graphs and cards.

---

## How to Add Images

Use the `image` card type in the REGIONS data. Example:

```js
{ type:'image', title:'My Photo', src:'images/photo.jpg', alt:'Description', caption:'Optional caption', url:'https://example.com' }
```

| Property  | Required | Description                                      |
|-----------|----------|--------------------------------------------------|
| `src`     | Yes      | Path to image (relative or absolute URL)         |
| `alt`     | No       | Alt text for accessibility                        |
| `caption` | No       | Small text overlay at bottom of image             |
| `url`     | No       | If set, clicking the image opens this link        |

Place the image card object in any scene's `cards` array (up to 3 cards per scene).

## How to Add URLs to Project Items

Project items already support a `url` field. Replace the `'#'` placeholders with real URLs:

```js
{ name:'Project Name', desc:'Description', url:'https://real-link.com' }
```

---

## Task Checklist

### 🧠 MIND (Right Panel)
- [ ] **Scene 1 – On My Mind**: Image? URL?
- [ ] **Scene 2 – Distraction & Curiosity**: Image? URL?
- [ ] **Scene 3 – The Instruments**: Image? URL?

### 💪 BAGGAGE (Left Panel)
- [ ] **Scene 1 – The Load**: Image? URL?
- [ ] **Scene 2 – Getting Stronger**: Image? URL?
- [ ] **Scene 3 – Carry System**: Image? URL?

### ✋ HANDS / BUSINESS (Right Panel)
- [ ] **Scene 1 – Hand Activity**: Image? URL?
- [ ] **Scene 2 – Building Things**: Image? URL?
- [ ] **Scene 3 – Mischief Report**: Image? URL?

### ❤️ HEART (Left Panel)
- [ ] **Scene 1 – Spirit Check**: Image? URL?
- [ ] **Scene 2 – Heart Fuel**: Image? URL?
- [ ] **Scene 3 – The Engine**: Image? URL?

### 🚽 OUTPUT CHUTE (Right Panel) — Project URLs
- [ ] **Scene 1 – Byproduct Port**
  - [ ] Lottery App → URL: `#`
  - [ ] Password Game → URL: `#`
  - [ ] Video Game → URL: `#`
  - [ ] Personality Quiz v1 → URL: `#`
  - [ ] Personality Quiz v2 → URL: `#`
- [ ] **Scene 2 – More Crap**
  - [ ] Personality Quiz v3 → URL: `#`
  - [ ] Audio Transcriber + Generator → URL: `#`
  - [ ] Interactive Map v1 → URL: `#`
  - [ ] Interactive Map v2 → URL: `#`
  - [ ] Bracelet → URL: `#`
- [ ] **Scene 3 – Full Dump** (Full Inventory — same items, update URLs here)
  - [ ] Lottery App → URL: `#`
  - [ ] Password Game → URL: `#`
  - [ ] Video Game → URL: `#`
  - [ ] Personality Quiz v1 → URL: `#`
  - [ ] Personality Quiz v2 → URL: `#`
  - [ ] Personality Quiz v3 → URL: `#`
  - [ ] Audio Transcriber → URL: `#`
  - [ ] Interactive Map v1 → URL: `#`
  - [ ] Interactive Map v2 → URL: `#`
  - [ ] Bracelet → URL: `#`

### 👟 FEET (Left Panel)
- [ ] **Scene 1 – Direction**: Image? URL?
- [ ] **Scene 2 – Flexibility**: Image? URL?
- [ ] **Scene 3 – Grounding**: Image? URL?

---

## Images Folder

Put your images in an `images/` subfolder next to `body.html`:

```
Me/
├── body.html
├── README-TASKS.md
├── images/
│   ├── climbing.jpg
│   ├── project-screenshot.png
│   └── ...
└── models/
    └── me.glb
```

---

## Notes
- Each scene shows **1 commentary card + up to 3 data cards** in the stat panel.
- To add an image card, replace one of the existing 3 cards in a scene's `cards` array, or swap a stat/chart for an image.
- Images are lazy-loaded and will scale to fit the card with `object-fit: cover`.
- Clicking an image with a `url` set opens the link in a new tab.
