// Core
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Store
import { persistor, store } from './store/store';

// Containers
import Main from './containers/Main';

// Styles
import 'antd/dist/antd.min.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
