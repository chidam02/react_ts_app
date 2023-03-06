import Hero from "./feature/hero/hero";
import React from "react";
import FrequentQ from "./feature/frequentQ";
import BlogList from "./feature/blogList";

export default function Home() {
  return (
    <React.Fragment>
      
      <Hero />

      <div className="container">
        <BlogList />
        <FrequentQ/>
      </div>

    </React.Fragment>
  );
}
