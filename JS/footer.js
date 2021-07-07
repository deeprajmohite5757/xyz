var footer = document.getElementById("footer");

// Creating main div
var footerContent = document.createElement("div");
footerContent.id = "footerContent";

//  text field
var footerTxt = document.createTextNode("YouTubeSearch 2021");
footerContent.append(footerTxt);

footer.append(footerContent);
