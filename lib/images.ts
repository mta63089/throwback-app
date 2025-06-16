export const images = [
  "https://cdn.pixabay.com/photo/2016/09/11/17/36/retro-lampshade-1662061_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/16/23/55/flea-market-1262036_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/07/28/01/08/vintage-3567130_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/30/12/29/bicycle-1872682_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/05/09/07/41/cassettes-5148602_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/09/22/49/coffee-7376005_1280.jpg",
];

export const getRandomImage = () => {
  const len = images.length - 1;
  return images[Math.floor(Math.random() * len)];
};
