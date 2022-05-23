import Head from 'next/head';
import Image from 'next/image';
import type { NextPage, GetStaticProps } from 'next';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

import Perspective from '../components/Perspective';
import styles from '../styles/Home.module.css';
import headshotPicture from '../public/images/headshot.jpg';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

import { readFileSync } from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data', 'posts.json');

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = readFileSync(postsDirectory);
  const posts = JSON.parse(postData.toString());
  return {
    props: {
      posts
    }
  }
};

export default function Home({
  posts 
} : { 
  posts: any 
}) {
  const ref = useRef<IParallax>(null);

  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar />
        <Feed posts={posts} />
      </div>
    </div>
  );
};