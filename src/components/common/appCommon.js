import React, { Fragment } from "react";
import { element } from "prop-types";

export const MovieTitle = ({ varTitle }) => (
  <Fragment>
    {varTitle === "" ? (
      ""
    ) : (
      <div>
        <div className="quesText mb-4">
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
        <div className="quesText mb-4">
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
               <div className="quesText mb-4">
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

       export const MostPlanet = ({ varPlanets }) => (
                <Fragment>
                  {varPlanets.length === 0 ? (
                    ""
                  ) : (
                    <div>
                      <div className="quesText mb-4">
                        What planet in Star Wars universe provided largest
                        number of vehicle pilots (Top 5) ?
                      </div>
                      {varPlanets.map((item, index) => (
                        <div key={index} className="ansText mb-4">
                          Planet : {item.planetname} - Pilots : (
                          {item.people_count}) - 
                          {item.people_list.map((element,i) => (
                           <span key={i}> {element.people_name} 
                           {i !== item.people_list.length -1 ? " , " : ""} 
                           </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </Fragment>
              );