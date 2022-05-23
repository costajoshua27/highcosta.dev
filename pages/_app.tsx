import '../styles/globals.css';
import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Sidebar.css';
import '../styles/Feed.css';
import '../styles/Post.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;