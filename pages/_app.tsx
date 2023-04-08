import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import "yet-another-react-lightbox/styles.css";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
