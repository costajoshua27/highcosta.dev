import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

import Perspective from '../components/Perspective';
import styles from '../styles/Home.module.css';
import headshotPicture from '../public/images/headshot.jpg';

const Home: NextPage = () => {

  const ref = useRef<IParallax>(null);

  return (
    <Parallax 
      ref={ref} 
      pages={2} 
      style={{ top: '0', left: '0' }}
    >
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
            <Image
              // priority
              src={headshotPicture}
              style={{
                filter: "saturate(50%) brightness(70%)"
              }}
              // style={{
              //   borderRadius: '50%'
              // }}
              // height={500}
              // width={500}
              // alt="Joshua Costa headshot photo"
            />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
          <h1 style={{ fontSize: '8rem', textAlign: 'start' }}>Hello! I'm Joshua Costa.</h1>
          {/* <Perspective>
            <div style={{
              width: '20ch',
              height: '20ch',
              background: 'cyan',
              borderRadius: '5px',
              transition: 'box-shadow 0.5s',
              willChange: 'transform'
            }}>
            </div>
          </Perspective> */}
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
