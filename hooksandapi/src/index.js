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
import UseEffect2 from './useEffect/UseEffect2';

import UseState1 from './UseState/UseState1'
import UseRef2 from './UseRef/UseRef2';
import UseState2 from './UseState/UseState2';
import Usetransition from './useTransition/Usetransition';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/* <React.StrictMode> */}

  <Usetransition  />

 {/* <UseEffect2 /> */}
  {/* <UseState2 /> */}

{/* <UseRef2 /> */}
 {/* <UseState1 /> */}
 {/* <Parents /> */}
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



