export function drawGalleryItem(item) {
  const itemElement = document.createElement("div");
  itemElement.classList = "gallery-item";

  const resourseWrapElement = document.createElement("div");
  resourseWrapElement.classList = "gallery-item__resource";

  if (item.type === "image") {
    const imgElement = document.createElement("img");
    imgElement.classList = "gallery-item__image";
    imgElement.src = item.resource;
    itemElement.appendChild(imgElement);
  } else if (item.type === "audio") {
    const audioElement = document.createElement("audio");
    audioElement.classList = "gallery-item__audio";
    audioElement.src = item.resource;
    audioElement.controls = true;

    resourseWrapElement.appendChild(audioElement);
  } else if (item.type === "video") {
    const videoElement = document.createElement("video");
    videoElement.classList = "gallery-item__video";
    videoElement.src = item.resource;
    videoElement.controls = true;

    resourseWrapElement.appendChild(videoElement);
  }

  const titleElement = document.createElement("span");
  titleElement.classList = "gallery-item__title";
  titleElement.textContent = item.title;

  itemElement.appendChild(resourseWrapElement);
  itemElement.appendChild(titleElement);

  return itemElement;
}
