import { useEffect, useState } from 'react';
import { getGifs } from '../Helpers/getGifs';
import { ISmallGif } from '../models/giphyTypes';

const useFetchGifs = (item: string) => {
  const [state, setState] = useState<{ data: ISmallGif[]; loading: boolean }>({
    loading: true,
    data: [],
  });

  useEffect(() => {
    getGifs(item).then((gif) =>
      setTimeout(() => {
        setState({
          loading: false,
          data: gif,
        });
      }, 1000),
    );
  }, [item]);

  return state;
};

export default useFetchGifs;
