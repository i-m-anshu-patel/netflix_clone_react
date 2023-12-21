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
import { BACKGROUND_IMG } from './utils/constants';

const App = () => {
  const styleBackground = {
    backgroundImage: `url("${BACKGROUND_IMG}")`
  }
  return (
    <div className='min-h-screen' style={styleBackground}>
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
