import Layout from "@/components/layout/Layout";
import "../styles/globals.css";

type MyAppProps = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
