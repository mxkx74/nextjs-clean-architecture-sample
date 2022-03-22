import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Component } from './Component';

const Home: NextPage = () => {
  const title = 'Home';

  // didMount
  useEffect(() => {
    console.log('didMount');
  }, []);

  return <Component title={title} />;
};

export default Home;
