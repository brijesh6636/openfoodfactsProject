
import { createContext } from 'react';
import './App.css';
import { AboutMe, Error, ErrorBoundary, Header, HomePage, NoInternetConnection, ProductDetailsDisplay } from './import';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './ReduxStore/appstore';


export const Context = createContext();
function App() {
  console.log(navigator.onLine)
  return (
    <Router>

        <Context.Provider value={{  }}>
        <Provider store={appStore}>
          <ErrorBoundary>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/product/:id' element={<ProductDetailsDisplay />} />
              <Route path='*' element={<Error />} />
            </Routes>
            </Layout>
          </ErrorBoundary>
          </Provider>
        </Context.Provider>
      
    </Router>
  );
}

const Layout = ({ children }) => {
  console.log(navigator.onLine)
  return (
    <div className="app-container flex flex-col min-h-screen "
    style={{
      background: "linear-gradient(135deg, #0a0a1e, #1c1c3a, #2e2e5f, #f05454, #f8c74c, #d9b08c, #a0a0a0)"
    }}
    
    >
      <Header className="shadow-md z-10" />
 
      <div className="flex flex-row flex-1">
        {/* <Sidebar className="shadow-lg bg-white min-w-[240px] w-64 p-6" /> */}
        <main className="flex-1  p-4  shadow-md rounded-lg">
          {navigator.onLine  ? children : <NoInternetConnection/>}
        </main>
      </div>
    </div>
  );
};

export default App;

