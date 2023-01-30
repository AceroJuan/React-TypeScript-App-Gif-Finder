import React from 'react';
import { ISmallGif } from '../../models/giphyTypes';
import './styles.css';
type Props = { smallGif: ISmallGif };

const GifGridItem = ({ smallGif }: Props) => {
  return (
    <>
      <div className="card animated fadeIn">
        <img src={smallGif.url} alt={smallGif.title} />
        <p key={smallGif.id}>{smallGif.title}</p>
      </div>
    </>
  );
};

export default GifGridItem;
