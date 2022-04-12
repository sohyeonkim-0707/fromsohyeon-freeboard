import "antd/dist/antd.css"; // antd css 전체적으로 골고루 주려면 (특히 별모양)
import "../styles/globals.css"; // 모든페이지에 전체적으로적용하고싶은css 나중에 emotion으로 바꿀거야

import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
