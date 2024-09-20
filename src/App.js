
import { createContext } from 'react';
import './App.css';
import { AboutMe, Error, ErrorBoundary, Header, HomePage } from './import';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './ReduxStore/appstore';


export const Context = createContext();
function App() {
  return (
    <Router>

        <Context.Provider value={{  }}>
        <Provider store={appStore}>
          <ErrorBoundary>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/aboutme' element={<AboutMe />} />
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
  return (
    <div className="app-container flex flex-col min-h-screen bg-gray-100">
      <Header className="shadow-md z-10" />
      <div className="flex flex-row flex-1">
        {/* <Sidebar className="shadow-lg bg-white min-w-[240px] w-64 p-6" /> */}
        <main className="flex-1 ml-0 lg:ml-10 xl:ml-10 p-6 bg-white shadow-md rounded-lg">
          {children}
        </main>
      </div>
    </div>
  );
};

export default App;

