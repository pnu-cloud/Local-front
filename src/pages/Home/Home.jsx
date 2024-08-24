import React from 'react';
import KoreaMap from '../../components/Maps/KoreaMap';
import GangwonMap from '../../components/Maps/GangwonMap';
const Home = () => {
  return (
    <div className="text-red">
      This is Home Page.
      <GangwonMap></GangwonMap>
      <KoreaMap></KoreaMap>
    </div>
  );
};
export default Home;
