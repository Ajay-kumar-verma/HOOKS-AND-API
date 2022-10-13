import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import State from './Context/State';
import UseEffect from './useEffect/UseEffect';
import UseMemo from './Usememo/UseMemo';
import UseReducer from './UseReducer/UseReducer';
import UseReducer2 from './UseReducer/UseReducer2';
import UseRef from './UseRef/UseRef'
import ReducerAndContext from './ReducerAndContext/ReducerAndContext';
import Parents from './Memo/Parents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/* <React.StrictMode> */}
 <Parents />

 {/* <UseRef /> */}
  {/* <ReducerAndContext /> */}
 {/* <UseReducer2 /> */}
 {/* <UseReducer /> */}
 {/* <UseMemo /> */}
 {/* <UseEffect /> */}
   {/* <State>
    <App />
   </State>
   */}

   {/* </React.StrictMode> */}
</>
);



