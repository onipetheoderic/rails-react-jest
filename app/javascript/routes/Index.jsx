import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import AllTasks from "../pages/AllTasks";
import AddTask from "../pages/AddTask";
import { StoreContextProvider } from "../store";

const queryClient = new QueryClient();
export default (
  <StoreContextProvider>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={AllTasks} />
          <Route path="/add" exact component={AddTask} />
        </Switch>
      </Router>
    </QueryClientProvider>
  </StoreContextProvider>
);
