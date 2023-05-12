const cards = document.querySelectorAll('[data-js="card"]');

// Get all the bookmark elements
const bookmarks = document.querySelectorAll('[data-js="card__bookmark"]');

// Loop through each bookmark element and add a click event listener
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    // Get the current image source
    const currentSrc = bookmark.getAttribute("src");

    // Check if the current image source is the default or the active version
    if (currentSrc === "./images/bookmark.svg") {
      // If it's the default version, change it to the active version
      bookmark.setAttribute("src", "./images/bookmarkactive.svg");
    } else {
      // If it's the active version, change it back to the default version
      bookmark.setAttribute("src", "./images/bookmark.svg");
    }
  });
});
