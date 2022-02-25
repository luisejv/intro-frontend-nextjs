import Script from "next/script";
import Layout from "../components/shared/Layout";
import { SearchProvider } from "../context/searchContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default MyApp;
