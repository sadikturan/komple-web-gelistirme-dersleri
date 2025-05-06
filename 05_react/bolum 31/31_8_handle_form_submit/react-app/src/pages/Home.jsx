import React from "react";
import SearchForm from "../components/SearchForm";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="img-overlay">
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 col-lg-7 mx-auto text-center text-white">
                <h1 className="display-2">Hoş Geldiniz!</h1>
                <p className="lead">
                  Keşfedilecek milyonlarca film, TV şovu ve kişi. Şimdi
                  keşfedin.
                </p>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Movies />
    </>
  );
};

export default Home;
