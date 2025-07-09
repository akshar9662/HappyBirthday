import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/HeroSection';
import Wishes from './Components/Wishes';
import GiftBox from './Components/GiftBox';
import ConfettiEffect from './Components/ConfettiEffect';
import PolaroidGallery from './Components/PolaroidGallery';
import SurpriseLetter from './Components/SurpriseLetter';
import LeaveWish from './Components/LeaveWish';
import BirthdayCake from './Components/BirthdayCake';
import BalloonGallery from './Components/BalloonGallery';

function App() {
  return (
    <div>
      <ConfettiEffect />
      <HeroSection />
      <GiftBox />
      <BirthdayCake />
      <PolaroidGallery />
      <BalloonGallery />
      <LeaveWish />
      <SurpriseLetter />
      <br />
      <Wishes />
      <br />
      <br/>
    </div>
  );
}

export default App;
