
import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import { AboutMe, Cart, Error, ErrorBoundary, Header, HomePage, NoInternetConnection, ProductDetailsDisplay } from './import';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './ReduxStore/appstore';
import { Footer } from './components/Footer';
import { Suspense } from 'react';



export const Context = createContext();

function App() {
  const [isOnline, setIsOnline] = useState(true)

  return (
    <Router>

      <Context.Provider value={{ isOnline, setIsOnline }}>
        <Provider store={appStore}>
          <ErrorBoundary>
            <Layout>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/aboutme' element={<AboutMe />} />
                  <Route path='/product/:id' element={<ProductDetailsDisplay />} />
                  <Route path='*' element={<Error />} />
                </Routes>
              </Suspense>
            </Layout>
          </ErrorBoundary>
        </Provider>
      </Context.Provider>

    </Router>
  );
}



const Layout = ({ children }) => {
  const { setIsOnline } = useContext(Context);
  const [isOnline, setIsOnlineState] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnlineState(online);
      setIsOnline(online);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    window.addEventListener('beforeunload', () => { sessionStorage.clear() })

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      window.removeEventListener('beforeunload', () => { sessionStorage.clear() })
    };
  }, [setIsOnline]);



  return (
    <div
      className="app-container flex flex-col min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0a0a1e, #1c1c3a, #2e2e5f, #f05454, #f8c74c, #d9b08c, #a0a0a0)"
      }}
    >
      <Header className="shadow-md z-10" />
      <div className="flex flex-row flex-1">
        <main className="flex-1 p-4 shadow-md rounded-lg">
          {isOnline ? children : <NoInternetConnection />}
        </main>
      </div>
      <Footer />
    </div>
  );
};




export default App;

