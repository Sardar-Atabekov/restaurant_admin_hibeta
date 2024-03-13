// Internet Explorer 11 requires polyfills and partially supported by this project.
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import './i18n';
import './styles/app-base.css';
import './styles/app-components.css';
import './styles/app-utilities.css';
import { createRoot } from 'react-dom/client';
import { createHttpLink, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const httpLink = createHttpLink({
  uri: 'http://192.168.97.6:2002/reporting/graphql',
});

 const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token} ` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
}); 

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
