const bodyEl = document.querySelector("body"); //Selects body into a variable

bodyEl.addEventListener("mousemove", (event) => {
  //console.log(event.offsetY);
  const xPos = event.offsetX; //Log X position
  const yPos = event.offsetY; //Log Y position
  const spanEl = document.createElement("span"); //Creates new span element. Span is just a heart as seen in the CSS file
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  //Creates a heart on the position of the mouse whenever it moves
  const size = Math.random() * 100; //Create a number between 0 and 100
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  //Randomizes the sizes of hearts to be created

  bodyEl.appendChild(spanEl);
  //Attaches new heart to HTML file
  setTimeout(() => {
    spanEl.remove();
  }, 3000); //Timer that removes new hearts in 3 seconds
});
