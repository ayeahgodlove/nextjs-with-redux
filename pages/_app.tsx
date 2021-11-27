import { AppProps } from "next/app";
import { storeWrapper } from "../redux/store";
import "../styles/globals.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
}
export default storeWrapper.withRedux(MyApp);
