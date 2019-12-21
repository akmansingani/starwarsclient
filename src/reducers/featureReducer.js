import { FEATURE_TITLE,FEATURE_SPECIES,FEATURE_CHARACTER,FEATURE_RESET } from "../actions/types";

export default function(state = null, action) {

  //console.log("action => " + action.type);

  switch (action.type) {
    case FEATURE_TITLE:
      return action.payload || null;
    case FEATURE_SPECIES:
      return action.payload || null;
    case FEATURE_CHARACTER:
      return action.payload || null;
    case FEATURE_RESET:
      return action.payload || null;
    default:
      return state;
  }
}
