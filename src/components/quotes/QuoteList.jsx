import { Fragment } from "react";

import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quotesB) => {
    if (ascending) {
      return quoteA.id > quotesB.id ? 1 : -1;
    } else {
      return quoteA.id < quotesB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search); //that's a built in constructor function built in to the browser so this is not coming from the react router, not coming from the react thisis default js constructor function, to this constructor we can pass location.search and that will give us a nice query params object , a object where we  can  extract query paremters by key
  console.log("queryParams", queryParams);

  // get method and get one of our queryparams keyin these case sort , sort because we have sort as a key in our query params and then check if it is equal to asc
  const isSortingAscending = queryParams.get("sort") === "asc"; //iska value true hua measn get true return krega to asc els des

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    console.log("inside a function");
    // we could use state and some code but we r doing query parameters and one of the things i wonna do here is  i wonna update the query parameter in the url so for the moment i'll not sort yet but i'll just update the url  .  and for these i import a hook again  usehistory hook  because learnt that these hooks allows us to change the page history it allows us to change the url therefore u can use that hook and the history object it returns to add query parameters to the currently loading pages
    // /quotes?sort= question mark wala tum decide kr k daal sakte ho

    // history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc")); //thisis step no 1and then we read the query parameter value and then act accordingly. now reading the queryparameter value is also relatively straight forward but we neet to use yet another hook provided by react router dom useLocation hook where usehistory hooks givesus access to the history object an object that allows us to change and manages the url ,useLocation gives us access to location object which has information about the currently loaded page about the currently loaded url
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );

    //it's optional for line no 39
    // history.push({
    //   pathname:location.pathname,
    //   search:`?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    // })
    // console.log("location", location); //check kr usme search property dek lo
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
