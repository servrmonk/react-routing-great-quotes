import QuoteForm from "../components/quotes/QuoteForm";
import React from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-https";

export default function NewQuote() {
  useHttp()
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    // if data is submitted so we use useHistory hook it allows us to change browser history so the history of pages we visited
    // history changes actions if we go to new page if we use push method which push the new pages on the stack of pages so  a new page options  on our history of pages or we can navigate replace method that replace the current page . but push method give a back option with back button but  replace we can't
    history.push("/quotes"); //now we navigate here if we sent the data here

    // if i m the user of this page and i started using something like test and i started entering something like test  and i enter some text and then i accidently swipped back or press the back button than i just go away and all my state is lost whatever i entered here is lost now u might have noticed that in some webpages where u enter data in the form this is prevented by the prompts . that ask u that u really want to go away then after ur confirmation it works and react router does it very simple  checkk quoteform component
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
