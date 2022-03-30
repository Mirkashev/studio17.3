import "../styles/main.scss";
import { isMobile } from "react-device-detect";
import { UserAgentProvider } from "@quentin-sommer/react-useragent";

function MyApp({ Component, pageProps }) {
  const { userAgent } = pageProps;
  return (
    <UserAgentProvider ua={userAgent}>
      <Component {...pageProps} isMobile={isMobile} />
    </UserAgentProvider>
  );
}
MyApp.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {
    userAgent: ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent,
  };

  if (Component.getInitialProps) {
    const initialProps = await Component.getInitialProps(ctx);
    Object.assign(pageProps, { ...initialProps });
  }

  return { pageProps };
};

export default MyApp;
