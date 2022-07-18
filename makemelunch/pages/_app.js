import "../styles/globals.css";
import { UserAuthContextProvider } from "../context/UserAuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <Component {...pageProps} />
    </UserAuthContextProvider>
  );
}

export default MyApp;
