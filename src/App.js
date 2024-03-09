import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './util/store';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
    <Head/>
    <Body/>
    {/* 
    Head
    Body-
      Sidebar-
       Menu      
      Main container-
       Buttons List
       Video Container-
        Video Card
     */}
    </div>
    </Provider>
  
  );
}

export default App;
