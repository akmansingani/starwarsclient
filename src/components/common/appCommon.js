import React, { Fragment } from "react";
import { element } from "prop-types";

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

export const MostSpecies = ({ varSpecies }) => (
         <Fragment>
           {varSpecies.length === 0 ? (
             ""
           ) : (
             <div>
               <div className="quesText mb-2">
                 What species appeared in the most number of StarWars films (Top 5) ?
               </div>
               {varSpecies.map((item, index) => (
                 <div key={index} className="ansText mb-4">
                   {item.speciesname} ({item.speciescount})
                 </div>
               ))}
             </div>
           )}
         </Fragment>
       );
