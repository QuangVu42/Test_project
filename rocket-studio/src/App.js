import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';

import publicRoutes from './Routes/Routes';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import ScrollToTopRoute from '../src/Layout/Scroll/ScrollToTopRoute/ScrollToTopRoute';

function App() {
  return (
    <Router >
      <div className="App">
      <ScrollToTopRoute />
        <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              var Layout = DefaultLayout 
              let ele = <Layout childern={<Page />}></Layout>

                if (route.layout) {
                  Layout = route.layout;
                  ele = <Layout><Page /></Layout> 
                } else if (route.layout === null) {
                  Layout = Fragment;
                  ele =  <Layout><Page /></Layout> 
                }
                return (
                  <Route
                      key={index}
                      path={route.path}
                      element= { ele }
                  />
                );
            })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
