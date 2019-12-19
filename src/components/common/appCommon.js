import React, { Fragment } from "react";

export const MovieTitle = ({ varTitle }) => (
  <Fragment>
    {varTitle === "" ? (
      ""
    ) : (
      <div>
        <div className="quesText mb-2">
          Which of all StarWars movies has longest opening crawl ?
        </div>
        <div className="ansText mb-4">{varTitle}</div>
      </div>
    )}
  </Fragment>
);


