import { useState } from "react";
import plusIcon from "../../images/plus.svg";
import "./accordian.css";

export default function Accordion() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="accordian-container">
      <button className="accordian-header" onClick={() => setShow(!show)}>
        <span>How do you find tenants for my property?</span>
        <span>
          <img src={plusIcon} alt="plus-icon" height="24px" width="24px" />
        </span>
      </button>

      <p className={`accordian-content ${ show ? "show-content" : "hide-content" }`} >
        This is an important question for multiple reasons. First, it gives you
        a place to outline your process and explain to people how it works when
        they choose your property management company. Secondly, it allows you to
        offer the opportunity for your owners to tell you how involved they’d
        like to be, if at all. If you do totally hands-off management for owners
        where you just send them the rents and the bills, make a point of
        selling that to those who likely have busy lives full of other things
        that require their attention.
      </p>
    </div>
  );
}
