import ReactDOM from 'react-dom';
import React from 'react';
 
import { HashRouter as Router,Route,Link,Switch } from 'react-router-dom';
import ErrorBound from './routes/ErrorBound/Test';
import Fragment from './routes/Fragment/index';

ReactDOM.render((<Router>
   <Switch>
      <Route path="/bound" extra component={ErrorBound} />
      <Route path="/fragment" extra component={Fragment} />
   </Switch>
</Router>),document.getElementById('root'));