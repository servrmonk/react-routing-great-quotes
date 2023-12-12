import { useRef, useState } from "react";

import { Prompt } from "react-router-dom";

import classes from "./QuoteForm.module.css";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  // back krne walal feature k lie do chij we need 1. we wonna determine when the user starts working on this form for ex when the form gets focused then as s 2nd step we wonna show a warning to the user if he or she's try to leave the page after start to work on these form now for find out the form is active we use onFocus event here andthen triger some fun when the form get focused. simple koi v input box me click kro focus event activate ho jaega

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    console.log("Focus!");
    // here we store the information that these form was focused and then we show a warning when the users try's to navigate away . now for storing information that the form is focused we use a event called state
    setIsEntering(true); //now we kknow that the user is working on the forms  showing a warning to the users when the user trie's to leave the form mayb accidently and rather state formward actually , these react router has a special component actually which we can use is prompt component prompt component will then automatically watch if we navigate away and then if the certain condition will met it will show a warning before it allows us to leave . now prompt needs two props it needs a when prop where we pass true or false to find weather this prompt should be shown if the user changes the url or not
  };

  return (
    <>
      {/* if if isentering is true than i wonna show these prompt if the users tries to leave the page   and we can also set  message prop then which actually takes a function which should return a string with the text we wonna show to the users when he tries to leave . this message is function which holds location object here which hold information about thepage we r trying to go to this would allow u to include a path u trying to go to in  this message which we r showing */}
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are u sure u want to leave ? All ur entered data will be lost!"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            {/* finishEnteringHandler is for when the focus is remove from the form or input box it will show  u prompt and if u also try to submit the form u'll see same prompt for avoiding that we use finishenteringhandler */}
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;


// now i m going to query parameters (extra data) question mark things. query parameters r special parameters which u find on some url at the ends of the urls onsome url u have a ?and then there after u have parameters pair which basically pass extra data to the page that was coded the difference compared to regular route parameter like our /quotes/:quoteId parameter  is that the regular parameter the quoteId are mandatory so the page inside these route will be loaded if we have the quoteId , where as query parameters are optionals there ? things doesnot change the routes matching it has not impact of which route is matched but whichever route is mathced than has accessed to query parameters data to for ex change the behaviour of  page that was loaded
// and what could be change behaviour  well for ex here  on the quote list page here we might wonna implement sorting so the quotes r sorted  in asc or des order by id or by age 
// for these i will add first of all sorting functionality so some logic to sort componentand in 2nd step i wonna set and use query parameterto save the current sorting for these we willimplement quotelist