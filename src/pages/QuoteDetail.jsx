import React, { Fragment } from "react";
import { Route, Link ,useRouteMatch} from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun!" },
  { id: "q2", author: "Maxmilian", text: "Learning React is Great!" },
];

export default function QuoteDetail() {
  // if we use quote instead of quotes than i have to make changes everywhere so react router give us certain hooks that allow us to  find out which url this component was rendered so that we don't have to repeat that url that path in the url here for that we use useRouteMatch is the hook name it's kind of useLoaction but it has more information about the currently loaded route not just the url but about some internally managed data react router is aware of  u can simply call useRouteMatch() here and u get some match .

  const match = useRouteMatch()
  console.log('match', match); //we get the full url ,now we can use this match object to construct these nested routes dynamically here  in line no 41 comments nested routes we can still create a string with a template literals  and we can also inject the dynamic value here and use match.path here this path including the placeholder  like    <Route path={`/quotes/${params.quoteId}/comments`}> to   <Route path={`${match.path}/comments`}>


  
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  // console.log("params",params);
  // console.log("params.quoteId",params.quoteId);

  // if (!params.quoteId || params.quoteId.trim() === "") {
  //   return <p>Invalid Quote ID</p>;
  // }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={match.path} exact>
      {/* as soon as i click on load comments it will automatically hide */}
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <h1>Quote Details Page</h1> */}
      {/* <p>{params.quoteId}</p> */}
      {/* someid is not ofcourse always the same id it's dynamic this quotedetail page could be load for different id's, we have to path dynamic value not static */}
      {/* <Route path='/quotes/some-id/comments'></Route> */}

      <Route path={`/quotes/${params.quoteId}/comments`}>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
      </Route>
      {/* or u can also set path='/quotes/:quoteId/comments */}
      </Fragment>
  );
}
