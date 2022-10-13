import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import State from './Context/State';
import UseEffect from './useEffect/UseEffect';
import UseMemo from './Usememo/UseMemo';
import UseReducer from './UseReducer/UseReducer';
import UseReducer2 from './UseReducer/UseReducer2';

import ReducerAndContext from './ReducerAndContext/ReducerAndContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ReducerAndContext />
 

 {/* <UseReducer2 /> */}
 {/* <UseReducer /> */}
 {/* <UseMemo /> */}
 {/* <UseEffect /> */}
   {/* <State>
    <App />
   </State>
   */}

  </React.StrictMode>
);



