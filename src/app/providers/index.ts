import compose from 'compose-function';

import withStore from './with-store';
import withRouter from './with-router';
import withQuery from './with-query';

export const withProviders = compose(withStore, withRouter, withQuery);
