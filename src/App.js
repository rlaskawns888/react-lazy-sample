import React, {lazy, Suspense} from 'react'
import './App.css';
// import Artists from './components/Artists';
// import Artists = React.lazy(() => import("./components/Artists"));
const Artists = lazy(() => import('./components/Artists'));

function App() {
  return (    
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
          <Artists />
      </Suspense>
    </div>    
  );
}

export default App;
