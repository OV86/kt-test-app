import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'; // needs to be imported before own styles. Makes the website look same in all browsers. Resets default styles.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// const store = configureStore();

// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

const jsx = (
  <AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));
