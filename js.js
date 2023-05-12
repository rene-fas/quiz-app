const cards = document.querySelectorAll('[data-js="card"]');
const answerTexts = document.querySelectorAll('[data-js="card__answertext"]');

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

// Get all buttonanswer elements and save them in buttonsAnswer
const buttonsAnswer = document.querySelectorAll(
  '[data-js="card__buttonanswer"]'
);

//loop through each buttonAnswer element
buttonsAnswer.forEach((buttonAnswer) => {
  //add Event on click on the corresponding button
  buttonAnswer.addEventListener("click", () => {
    //choose from the parent element of the button the answertext p element
    const answerText = buttonAnswer.parentElement.querySelector(
      '[data-js="card__answertext"]'
    );
    //catch the attribute hidden from answertext if it != null
    const isHidden = answerText.getAttribute("hidden") !== null;
    //if it is hidden remove the attribute
    if (isHidden) {
      answerText.removeAttribute("hidden");
      //else add it
    } else {
      answerText.setAttribute("hidden", "");
    }
  });
});
