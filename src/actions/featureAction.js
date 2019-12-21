import axios from "axios";
import { FEATURE_TITLE, FEATURE_SPECIES, FEATURE_CHARACTER,FEATURE_RESET } from "./types";

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

