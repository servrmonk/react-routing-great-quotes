import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";  when user visits this page than this part will be downloaded
// import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import('./pages/NewQuote')); //now this function here which  i pass in reactlazy will be executed by react when this newQuote component is needed and that's a key difference it will not will executed in advance to download the code in advance  but only when  needed
const  QuoteDetail =  React.lazy(() => import('./pages/QuoteDetail'));
const NotFound =  React.lazy(() => import('./pages/NotFound'));
const AllQuotes =  React.lazy(() => import('./pages/AllQuotes'));


function App() {
  return (
    <Layout>
    <Suspense fallback={
      <div className="centered">
      {/* loading spinner comes from bootstrap */}
        <LoadingSpinner /> 
      </div>
    }> 
      <Switch>
      
        <Route path="/" exact>
          {/* check all the comment are updated on github */}
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>

        <Route path="/new-quote">
        {/* by adding Suspense and some fallback when the newquote takes some milisecond    or u can also wrap whole switch in suspense*/} 
        {/* <Suspense >  <NewQuote />  </Suspense> */}
         <NewQuote /> 
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}
export default App;
