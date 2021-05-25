import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './MovieCatalog.scss';

export default function MovieCatalog(props) {
  const {movies: {results}} = props;

  return results.map(movie => (
    <div key={movie.id} xs={4} className='movie-catalog'>
      <MovieCard movie={movie}/>
    </div>
  ))
}

function MovieCard(props) {
  const {movie: {id, title, poster_path}} = props;
  const [posterPath, setPosterPath] = useState(`https://image.tmdb.org/t/p/original/${poster_path}`);
  const {Meta} = Card;
 
  useEffect(() => {
    if (!poster_path) {
      setPosterPath('dibujopeli.png');
    }
  }, [poster_path]);

  return (
    <Link to={`/movie/${id}`} >
      <Card 
        hoverable  
        style={{width: 240, marginLeft:20, marginRight:10}} 
        cover={<img alt={title} src={posterPath} />}
        actions={[<EyeOutlined type='eye' key='eye'/>]}
        >
        <Meta title={title}/>
      </Card>
    </Link>
  )
}
