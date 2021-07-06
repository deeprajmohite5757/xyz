// function for adding next button
function putNextButton(wrapper) {
  // Creating next button
  let nextButton = document.createElement("button");
  nextButton.id = "nextButton";
  nextButton.classList.add("pagenumbers");
  nextButton.textContent = "Next";

  // Adding event listener for next button
  nextButton.addEventListener("click", () => {
    getData(inputField.value, nextPageToken);
    removeNextButton();
  });

  // adding next button to html page
  wrapper.append(nextButton);
}

function removeNextButton() {
  if (document.getElementById("nextButton"))
    document.getElementById("nextButton").remove();
}
