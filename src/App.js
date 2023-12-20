import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/redux/appStore';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './components/Login';
import Header from './components/Header';
import Browse from './components/Browse';

function App() {
  return (
    <div className='min-h-screen' style={{backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg")`}}>
      <BrowserRouter>
        <Provider store={appStore}>
        <Header />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/browse' element={<Browse />} />
          </Routes>
        </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
