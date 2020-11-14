import React from 'react';
import Loadable from 'react-loadable-customize-key';
import Loading from './Loading';
import delay from '../utils/delay';
import path from 'path';

const LoadableExample = Loadable({
  loader: () => import('./Example'),
  loading: Loading,
  appName: '123'
});

export default function App() {
  return <LoadableExample/>;
}
