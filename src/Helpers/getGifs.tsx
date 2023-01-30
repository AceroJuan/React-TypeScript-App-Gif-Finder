import { IGIFList, ISmallGif } from '../models/giphyTypes';

export const getGifs = async (item: string) => {
  const resp = await fetch(
    `http://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
      item,
    )}&api_key=1q8bsMLFhZWuVmX3BpYp4CJw8RJqIyKR`,
  );
  const { data }: IGIFList = await resp.json();
  const gifs: ISmallGif[] = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  });
  return gifs;
};
