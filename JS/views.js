function calculateViews(items) {
  items.forEach((item) => {
    // adding views of video
    let videoURL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${API_KEY}`;

    fetch(videoURL)
      .then((data) => data.json())
      .then((data) => {
        item.views = data.items[0].statistics.viewCount;
      });
  });
}
