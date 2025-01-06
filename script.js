const bookmarkButtons = document.querySelector('[data-js="bookmark-button"]');

// Add event listeners to first bookmark button

bookmarkButtons.addEventListener("click", () => {
  // Toggle between the filled and unfilled bookmark icons
  if (bookmarkButtons.getAttribute("src") === "assets/bookmark.svg") {
    bookmarkButtons.setAttribute("src", "assets/bookmark-check.svg"); // Active state
  } else {
    bookmarkButtons.setAttribute("src", "assets/bookmark.svg"); // Inactive state
  }
});
