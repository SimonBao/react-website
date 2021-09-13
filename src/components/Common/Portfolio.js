import React, { Component } from "react";
import { Link } from "react-router-dom";
import PortfolioItem from './PortfolioItem';

const portfolios = [
  {title: 'test', subtitle: 'tester'},
  {title: 'whoop', subtitle: 'yeah'},
];

class Portfolio extends Component {
  render() {
    return(
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            {portfolios.map((portfolio) => {
              return <PortfolioItem {...portfolio} />
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;
