import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Knowledge from './pages/Knowledge';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import ProfessionalBackgroundAndEducation from './pages/ProfessionalBackgroundAndEducation';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contacts" component={Contacts} />
          <Route path="/skills" component={Knowledge} />
          <Route path="/background" component={ProfessionalBackgroundAndEducation} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
