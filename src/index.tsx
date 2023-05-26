// react
import React from 'react';
// react-redux
import { Provider } from 'react-redux';
// react-dom
import ReactDOM from 'react-dom/client';
// react-router-dom
import {
  RouterProvider,
} from 'react-router-dom';
// tanstack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// App files
import './style/main.css';
import { store } from './app/store';
import { router } from './features/routes/route';
// reportWebVitals
import reportWebVitals from './reportWebVitals';
import { Loader } from './utils/loader';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<Loader message={`Loading...`} />} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
