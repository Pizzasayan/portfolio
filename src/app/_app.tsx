import { useEffect } from 'react';
import 'mailgo/dist/mailgo.css'; // Import mailgo styles
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the config on the global window object
      (window as any).mailgoConfig = {
        dark: true, // Enable dark mode for the Mailgo modal
        actions: {
          mailto: true,  // Enable the "mailto" action
          gmail: true,   // Show Gmail as an option
          outlook: true, // Show Outlook as an option
          chrome: false,
        },
        lang: 'fr',  // Language setting
        details: true, // Show details like the full mailto link
      };

      // Import and initialize Mailgo
      const mailgo = require('mailgo');
      mailgo.default();
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;