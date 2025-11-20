# How to Add Photos to the Gallery

1.  **Select your photos**: Choose the photos you want to display.
2.  **Rename them**: Rename your photos sequentially to match this pattern:
    *   `gallery-1.jpg`
    *   `gallery-2.jpg`
    *   `gallery-3.jpg`
    *   ...and so on.
    *   *Note: You can use .jpg, .jpeg, or .png, but the code is currently set to look for `.jpg`. If you have other formats, let me know or rename them to .jpg.*
3.  **Paste them here**: Copy all your renamed photos into this folder: `public/images/shutterbugs`.
4.  **Update the Code (Optional)**: The code is currently set to display **12** images. If you add more (e.g., 50), you just need to change one number in `src/pages/Shutterbugs.jsx`.
    *   Look for `const TOTAL_IMAGES = 12;` and change `12` to your number.
