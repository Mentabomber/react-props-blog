export function getImgUrl(image) {
    console.log(image);
    if (image === "") {
        return "https://placehold.co/600x400";
    }
    return new URL('../assets/imgs/posts/' + image, import.meta.url).href;
  }