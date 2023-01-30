import React from 'react';
import useFetchGifs from '../../Hooks/useFetchGifs';
import GifGridItem from '../GifGridItem/GifGridItem';
import './styles.css';

type Props = { item: string };

const GifGrid = (props: Props) => {
  const { data, loading } = useFetchGifs(props.item);

  return (
    <>
      <h3 className="animated flash">{props.item}</h3>
      <div className="card-grid">
        {loading && <p>{props.item} | Loading ...</p>}
        {data.map((gif) => {
          return <GifGridItem key={gif.id} smallGif={gif} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
