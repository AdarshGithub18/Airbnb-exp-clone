import React from 'react';
import './App.css';
import data from './data/Itemdata';

//importing components
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  const CardData = data.map((item) => {
    return (
      <Card
        // coverImg={item.coverImg}
        // title={item.title}
        // rating={item.stats.rating}
        // totalRiview={item.stats.reviewCount}
        // location={item.location}
        // price={item.price}
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-list ">{CardData}</section>
    </>
  );
};

export default App;
