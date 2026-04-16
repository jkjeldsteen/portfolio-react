# Game Preview Images/GIFs Setup

This directory contains preview images and animated GIFs for each game displayed on the Games page.

## File Structure

Place your game preview files in this directory with these exact names:

```
public/images/game-previews/
├── bouncy-pirate.png          (static image) ✓ GIF support enabled
├── bouncy-pirate.gif          (animated gameplay)
├── gold-mine-defender.png     (static image) ✓ GIF support enabled
├── gold-mine-defender.gif     (animated gameplay)
├── warthog-defence.png        (static image) - GIF support PENDING
├── square-jumper.png          (static image) - GIF support PENDING
```

**Note**: Warthog Defence and Square Jumper currently display only static images. GIF support will activate automatically once you upload `.gif` files for them.

## How It Works

- **Static image (.png/.jpg)**: Displayed by default when browsing games
- **Animated GIF (.gif)**: Plays when you hover over a game card
- Smooth transition between static and animated versions

## Specifications

**Recommended dimensions**: 400x200px or 600x300px (16:9 aspect ratio)

**Static Image (.png)**:
- Format: PNG or JPG
- File size: Keep under 2MB
- Should be a good representative screenshot from the game

**Animated GIF (.gif)**:
- Format: GIF (must be animated)
- Duration: 3-5 seconds of looped gameplay
- File size: Keep under 5MB (compress if needed)
- Shows the game in action

## How to Create Preview GIFs

1. **From your games on itch.io**:
   - Record a short gameplay video (5-10 seconds)
   - Use a tool like ScreenToGif (Windows), LICEcap, or online converters
   - Export as GIF

2. **Alternative - Use screenshots**:
   - Take a nice screenshot from your game
   - Name it with the game folder name
   - Use PNG or JPG format

## Enabling GIF Hover Animation

The hover-to-GIF feature is set up and will **automatically activate** once you add the `.gif` files.

**Current status**:
- ✅ Bouncy Pirate - GIF hover enabled (upload both .png and .gif)
- ✅ Gold Mine Defender - GIF hover enabled (upload both .png and .gif)
- ⏳ Warthog Defence - Static only for now (add .gif later to enable hover)
- ⏳ Square Jumper - Static only for now (add .gif later to enable hover)

Simply upload the `.gif` file whenever you're ready, and the hover animation will start working immediately!

## Naming Convention

Each game has TWO files with specific extensions:

**Static Image (shown by default)**:
- `[game-name].png` - Preferred format for static images
- Must be one of the recognized game IDs

**Animated GIF (shown on hover)**:
- `[game-name].gif` - Animated gameplay preview
- Must have the same base name as the static image

**Game IDs** (must match exactly):
- bouncy-pirate
- gold-mine-defender
- warthog-defence
- square-jumper

### File Naming Examples

✅ Correct:
- `bouncy-pirate.png` (static) + `bouncy-pirate.gif` (animated)
- `gold-mine-defender.png` + `gold-mine-defender.gif`

❌ Wrong:
- `bouncy-pirate.jpg` (wrong extension for static - use .png)
- `bouncy_pirate.gif` (wrong naming - use hyphens)
- Only `bouncy-pirate.gif` without static image (both needed)
