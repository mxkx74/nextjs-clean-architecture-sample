import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '../store/configureStore';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={configureStore()}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
