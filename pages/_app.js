import "../styles/globals.css";
import { moralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <moralisProvider
      appId={NEXT_PUBLIC_APP_ID}
      serviceUrl={NEXT_PUBLIC_SERVICE_URL}
    >
      <Component {...pageProps} />
    </moralisProvider>
  );
}

export default MyApp;
