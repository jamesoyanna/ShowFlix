import React from 'react';
import './moviedetails.css';
import { FaArrowLeft } from 'react-icons/fa';
import placeholderImage from '../../../images/mov3.png';

const MovieDetails = ({ selectedMovie, onClose }) => {
  const { image, title, plot } = selectedMovie || {};

  return (
    <div className="movie-details" key={selectedMovie?.id}>
      <div>
        <FaArrowLeft onClick={onClose} />
      </div>
      <div className="movie-card">
        <div className="image-container">
          <img src={image || placeholderImage} alt={title || 'No Title'} className="cover-image" />
        </div>
        <h2>{title}</h2>
        <p className="plot">{plot}</p>
        <button className="watch-button">Watch</button>
      </div>
    </div>
  );
};

export default MovieDetails;
