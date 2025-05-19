Input :

The app uses fixed profile details (like name, job title, and description) and a local image file to create six individual profile cards.

Process :

When the app runs, it shows all six cards in a grid layout. Each card starts in a small thumbnail view. When a user taps on a card, it expands to show more details while the rest stay collapsed. This toggle behavior is handled using component state and the immutability-helper library.

Output: 

On the screen, users see a gallery of six profile cards. Tapping any card will expand it, making it easier to read the full details. Only one card stays expanded at a time, and tapping again will collapse it back.

