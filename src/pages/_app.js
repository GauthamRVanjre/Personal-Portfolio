import Theme from "../styles/theme";
import { useEffect } from "react";
import aos from "../../public/aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    aos();
  }, []);
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
