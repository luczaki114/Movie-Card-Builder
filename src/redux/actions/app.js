import { CLEAR_CACHE } from "../constants/app";

export const clearCache = payload => {
  return {
    type: CLEAR_CACHE,
    meta: {
      persist: true
    }
  };
};
