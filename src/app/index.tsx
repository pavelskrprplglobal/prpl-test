import React, { Suspense } from 'react';

import { Routing } from '../pages';
import { withProviders } from './providers';
import Header from '../widgets/header';

import './styles/normalize.css';
import './styles/vars.css';
import './styles/main.css';

const App = () => (
  <>
    <Header />

    <Suspense fallback={<>Loading...</>}>
      <Routing />
    </Suspense>
  </>
);

export default withProviders(App);
