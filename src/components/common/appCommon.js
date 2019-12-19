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

export const MostCharacter = ({ varCharacter }) => (
  <Fragment>
    {varCharacter === "" ? (
      ""
    ) : (
      <div>
        <div className="quesText mb-2">
          What character(person) appeared in the most of StarWar Films ?
        </div>
        <div className="ansText mb-4">{varCharacter}</div>
      </div>
    )}
  </Fragment>
);
