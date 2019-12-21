import axios from "axios";
import { FEATURE_TITLE, FEATURE_SPECIES, FEATURE_CHARACTER,FEATURE_RESET,FEATURE_PLANET } from "./types";


export const getMovieTitleOpeningCrawl = resetFlag => {
         // reset action state and inform reducer
         if (resetFlag) {
           return async function(dispatch) {
             dispatch({ type: FEATURE_RESET, payload: null });
           };
         }

         return async function(dispatch) {
           let url = process.env.REACT_APP_API_URL;

           // call api for getting title with opening crawl
           try {
                 const req = await axios({
                   method: "get",
                   url: url + "/home/getTitleOpenCrawl",
                   headers: {
                     "Content-Type": "application/json",
                     Accept: "application/json"
                   }
                 });

                 let resp = {
                   status: "success",
                   type: FEATURE_TITLE,
                   data: req.data
                 };

                 // call next method for data
                 dispatch(getCharacterMostAppeared());

                 dispatch({ type: FEATURE_TITLE, payload: resp });
               } catch (error) {
             let resp = {
               status: "error",
               type: FEATURE_TITLE,
               data: "Error occured, please try again later!"
             };

             if (error.response) {
               resp["data"] = error.response.data["error"];
             }

             dispatch({ type: FEATURE_TITLE, payload: resp });
           }
         };
       };

export const getCharacterMostAppeared = () => {
  return async function(dispatch) {
    let url = process.env.REACT_APP_API_URL;
    let respType = FEATURE_CHARACTER;

    // call api for getting most appeard character data
    try {
          const req = await axios({
            method: "get",
            url: url + "/home/getCharacterMostAppeared",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          });

          let resp = {
            status: "success",
            type: respType,
            data: req.data
          };

          // call next method for data
          dispatch(getMostNumberOfSpecies());

          dispatch({ type: respType, payload: resp });
        } catch (error) {
      let resp = {
        status: "error",
        type: respType,
        data: "Error occured, please try again later!"
      };

      if (error.response) {
        resp["data"] = error.response.data["error"];
      }

      dispatch({ type: respType, payload: resp });
    }
  };
};

export const getMostNumberOfSpecies = () => {
  return async function(dispatch) {
    let url = process.env.REACT_APP_API_URL;
    let respType = FEATURE_SPECIES;

    // call api for getting most number of species
    try {
      const req = await axios({
        method: "get",
        url: url + "/home/getMostNumberOfSpecies",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });

      let resp = {
        status: "success",
        type: respType,
        data: req.data
      };

      dispatch(getPlanetNumberOfPilots());

      dispatch({ type: respType, payload: resp });
    } catch (error) {
      let resp = {
        status: "error",
        type: respType,
        data: "Error occured, please try again later!"
      };

      if (error.response) {
        resp["data"] = error.response.data["error"];
      }

      dispatch({ type: respType, payload: resp });
    }
  };
};


export const getPlanetNumberOfPilots = () => {
  return async function(dispatch) {
    let url = process.env.REACT_APP_API_URL;
    let respType = FEATURE_PLANET;

    // call api for getting most number of species
    try {
      const req = await axios({
        method: "get",
        url: url + "/home/getPlanetNumberOfPilots",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });

      let resp = {
        status: "success",
        type: respType,
        data: req.data
      };

      dispatch({ type: respType, payload: resp });
    } catch (error) {
      let resp = {
        status: "error",
        type: respType,
        data: "Error occured, please try again later!"
      };

      if (error.response) {
        resp["data"] = error.response.data["error"];
      }

      dispatch({ type: respType, payload: resp });
    }
  };
};