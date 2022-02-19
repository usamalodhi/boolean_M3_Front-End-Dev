# Pokemon Trading Cards

We're going to create a Pokemon Trading Cards show page. To achieve this, you'll use JS to dynamically create all the elements on the page. The end result should look like this:

![Result](result.gif)

## Learning Objectives
- Use JavaScript and the DOM to render dynamic HTML

## Instructions
- The `data.js` file contains a global array that contains information on different pokemon types
- Inside `index.js`, you should loop through this array and render a "card" for each pokemon type. Use the example image as a reference. 
- You will also find an HTML example commented out in the `index.html`
- Use the exact CSS classes you see in the example HTML to obtain the same style for each card
- The cards should be nested inside `<ul class="cards"></ul>`
- Use the `official-artwork` object key as the images for the card. The images are all inside of the `sprites` key, in each pokemon object
- Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

## Tips
- **Start with a single card**. Once you've got a card, think of a way to programmatically create all the others.
- If you are struggling to create the full card layout - start simple. Try render just the name of each pokemon in a `<p>` tag. Then, add the image, then the stats, etc
- Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
- Make sure you understand well the data structure before starting to create the cards

## Challenge
Add an extra section to each card that contains information about which games each pokemon appeared in.

## Challenge 2
See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...)
