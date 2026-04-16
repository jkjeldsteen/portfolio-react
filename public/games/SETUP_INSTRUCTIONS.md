# Game Setup Instructions

This directory contains your self-hosted WebGL games. Follow these steps to populate each game folder:

## Steps to Setup

1. **Download game zips from Itch.io**
   - Go to each game's page on https://jkjeldsteen.itch.io/
   - Download the WebGL build zip file for each game

2. **Extract to appropriate folders**
   - **Bouncy Pirate** → Extract all contents to `/bouncy-pirate/`
   - **Gold mine defender** → Extract all contents to `/gold-mine-defender/`
   - **Warthog Defence** → Extract all contents to `/warthog-defence/`
   - **Lost & Found Man** → Extract all contents to `/lost-found-man/`
   - **Square Jumper** → Extract all contents to `/square-jumper/`

3. **Verify structure**
   Each game folder should contain:
   ```
   /games/[game-name]/
   ├── index.html         (Entry point - critical!)
   ├── Build/
   │   ├── [GameName].wasm
   │   ├── [GameName].data
   │   └── [GameName].js
   └── TemplateData/
       └── (style files, etc.)
   ```

4. **Test locally**
   - Run `npm start` to test the Games page
   - Click "Play Now" on a game and it should load in a modal

## Important Notes

- ⚠️ **Use HTTPS in production**: WebGL games may have restrictions in some browsers over HTTP
- The `index.html` file must be at the root of each game folder
- If games don't load, check browser console for CORS or loading errors
- Each game folder should be a complete, standalone WebGL build

## Troubleshooting

**Game won't load?**
- Verify `index.html` exists in the game folder
- Check browser console (F12) for errors
- Ensure all files were extracted completely

**Game loads but doesn't run?**
- Check that all files in the Build/ folder are present
- Verify file permissions allow reading
- Some browsers may block from HTTP - use HTTPS or localhost

**Save system not working?**
- WebGL builds need to be served from the web to have persistent storage
- Epoch Raiders is still better for save functionality
