import React from 'react';

const Card = ({ item }) => {
  return (
    <>
      <section className="card-section">
        <div className="card-container section">
          <img
            src={`../src/assets/images/${item.coverImg}`}
            alt="image"
            className="card-image"
          />
          <div className="card-info">
            <img src={`../src/assets/images/star.png`} alt="rating" />
            <span className="rating">{item.stats.rating}</span>
            <span className="total-review">({item.stats.reviewCount})</span>
            <span className="location">{item.location}</span>
          </div>
          <p className="title">{item.title}</p>
          <p>
            <strong>From ${item.price}</strong>/person
          </p>
        </div>
      </section>
    </>
  );
};

export default Card;
