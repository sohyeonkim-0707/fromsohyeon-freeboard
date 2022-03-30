import "antd/dist/antd.css"; // antd css 전체적으로 골고루 주려면 (특히 별모양)
import "../styles/globals.css"; // 모든페이지에 전체적으로적용하고싶은css 나중에 emotion으로 바꿀거야
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
