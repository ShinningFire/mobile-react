import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routerConfig from './routerConfig'
function App() {
  return (
    <div className="App">
        <Router>
          <ScrollToTop>
              <Switch>
                {
                  routerConfig.map((items,index) => {
                    return (
                      <Route 
                      key={index}
                      exact={items.exact}
                      path={items.path} 
                      component={items.component}
                      />
                    )
                  })
                }
              </Switch>
          </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
