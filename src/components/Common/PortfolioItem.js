import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PortfolioItem extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <Link className="portfolio-link" data-toggle="modal" to="#portfolioModal6">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt=""/>
        </Link>
        <div className="portfolio-caption">
          <h4>{this.props.title}</h4>
          <p className="text-muted">{this.props.subtitle}</p>
        </div>
      </div>
    )
  }
}

export default PortfolioItem;
