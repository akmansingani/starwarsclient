import React, { Component,Fragment } from "react";

import {
  FEATURE_TITLE,
  FEATURE_SPECIES,
  FEATURE_CHARACTER,
  FEATURE_PLANET
} from "../actions/types";

import * as actions from "../actions";
import { connect } from "react-redux";

import { MovieTitle, MostCharacter, MostSpecies,MostPlanet } from "./common/appCommon";


class App extends Component {
  varTitle = "";
  varCharacter = "";
  varSpecies = [];
  varPlanets = [];
  varResetFlag = false;
  varLoading = false;

  constructor(props) {
    super(props);
    this.startDataProcess = this.startDataProcess.bind(this);
  }

  startDataProcess = () => {
    this.varLoading = this.varLoading ? false : true;
    this.props.getMovieTitleOpeningCrawl(this.varResetFlag);
  };

  renderServerResponse() {
    const { feature } = this.props;

    switch (feature) {
      case undefined || null:
        this.varTitle = "";
        this.varCharacter = "";
        this.varSpecies = [];
        this.varPlanets = [];
        this.varResetFlag = false;
        this.varLoading = false;
        return;
      default:
        if (feature["status"] === "error") {
          return;
        } else {
          if (feature["type"] === FEATURE_TITLE) {
            this.varTitle = feature["data"]["response"];
            this.varResetFlag = true;
            return;
          } else if (feature["type"] === FEATURE_CHARACTER) {
            this.varCharacter = feature["data"]["response"];
            return;
          } else if (feature["type"] === FEATURE_SPECIES) {
            if (feature["data"]["response"] !== "") {
              var data = JSON.parse(feature["data"]["response"]).species;
              this.varSpecies = data;
            }
            return;
          } else if (feature["type"] === FEATURE_PLANET) {
            if (feature["data"]["response"] !== "") {
              var resp = JSON.parse(feature["data"]["response"]).planets;
              this.varPlanets = resp;
              this.varLoading = false;
            }
            return;
          }
        }
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderServerResponse()}
        <header>
          <main role="main">
            <section className="jumbotron text-center">
              <div className="container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                  className="img-fluid imgLogo mb-4"
                  alt="Logo"
                />
                <p>
                  <button
                    onClick={this.startDataProcess}
                    className="btn btn-danger mb-4"
                    disabled={this.varLoading}
                  >
                    {this.varLoading
                      ? "Loading..."
                      : "Do. Or do not.There is no try"}
                  </button>
                </p>
                <div className="mb-4">
                  <MovieTitle varTitle={this.varTitle} />
                </div>
                <div className="mb-4">
                  <MostCharacter varCharacter={this.varCharacter} />
                </div>
                <div className="mb-4">
                  <MostSpecies varSpecies={this.varSpecies} />
                </div>
                <div className="mb-4">
                  <MostPlanet varPlanets={this.varPlanets} />
                </div>
              </div>
            </section>
          </main>
        </header>
      </Fragment>
    );
  }
};

function mapStateToProps({ feature }) {
  return {
    feature
  };
}

export default connect(mapStateToProps, actions)(App);


