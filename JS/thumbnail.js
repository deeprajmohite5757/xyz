var thumbnailsContainer = document.createElement("div");
thumbnailsContainer.id = "thumbnailsContainer";

var content = document.getElementById("content");

function setThumbnail(items) {
  console.log("inside thumbnail");
  content.innerHTML = "";
  thumbnailsContainer.innerHTML = "";
  items.forEach((item) => {
    let output = getOutput(item);
    thumbnailsContainer.append(output);
  });
  content.append(thumbnailsContainer);
}

function getOutput(item) {
  // assining main div for thumbnail
  let thumbnailsBox = document.createElement("div");
  thumbnailsBox.id = "thumbnailsBox";

  // Div for video image
  let thumbnailImgDiv = document.createElement("div");
  thumbnailImgDiv.id = "thumbnailImgDiv";
  // thumbnail image
  let thumbImg = document.createElement("img");
  thumbImg.className = "thumbImg";
  thumbImg.src = item.snippet.thumbnails.medium.url;
  thumbnailImgDiv.append(thumbImg);
  thumbnailsBox.append(thumbnailImgDiv);

  // Div for video title
  let titleDiv = document.createElement("div");
  titleDiv.id = "titleDiv";
  // thumbnail title
  let title = document.createTextNode(item.snippet.title);
  titleDiv.append(title);
  thumbnailsBox.append(titleDiv);

  // Div for channel title
  let channelTitleDiv = document.createElement("div");
  channelTitleDiv.id = "channelTitleDiv";
  // channel title
  let channelTitle = document.createTextNode(item.snippet.channelTitle);
  channelTitleDiv.append(channelTitle);
  thumbnailsBox.append(channelTitleDiv);

  // Adding event Listener
  thumbnailsBox.addEventListener("click", () => {
    window.open(`https://www.youtube.com/watch/?v=${item.id.videoId}`);
  });

  // adding views of video
  // Creatning div for views
  let viewsDiv = document.createElement("div");
  viewsDiv.id = "viewsDiv";
  // Creating text-node
  let views = document.createTextNode(numFormatter(item.views) + " views");

  viewsDiv.append(views);
  thumbnailsBox.append(viewsDiv);

  // publised date
  let dateDiv = document.createElement("div");
  dateDiv.id = "dateDiv";

  // Creating text node for date
  let date = document.createTextNode(item.snippet.publishTime);
  date.id = "date";
  dateDiv.append(date);
  thumbnailsBox.append(dateDiv);

  // Div for video description
  let descriptionDiv = document.createElement("div");
  descriptionDiv.id = "descriptionDiv";

  let desc = document.createTextNode(item.snippet.description);
  descriptionDiv.append(desc);
  thumbnailsBox.append(descriptionDiv);

  return thumbnailsBox;
}
