import "./hero.css";
import heroPic from "../../../../images/Blog-post-amico-1.svg";



export default function Hero() {
  return (
    <>
      <div className="hero-wrapper row">

        <section className="col-6 align-self-start">

          <h1 className="fw-bold mb-4">
            <span className="gradient-text">Blogs!</span> That Can Make You
            Financial <span className="gradient-text">Independant</span>
          </h1>

          <p className="fw-bold">
            CrossVal provides you some great blogs that can make you financial
            independent. Apply these blogs into your daily life and see the
            changes.
          </p>

          <div className="hero-email row">
            <div className="col flex-grow-1">
                <input type="email" className="form-control d-inline-block h-100" placeholder="Enter your email" name="email"/>
            </div>
            <div className="col">
              <button className="btn bg-gradient btn-lg bold text-white">
                Subscribe Now
              </button>
            </div>
          </div>

        </section>



        <section className="col-6">
            <img src={heroPic} alt="hero-img" height="512px" width="616px"/>
        </section>






      </div>

    </>
  );
}
