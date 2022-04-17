import {useSelector} from 'react-redux'
import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Header from './components/Header';


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <>
      {isLoggedIn && <Header />}
      <Counter />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
    </>

  );
}

export default App;
