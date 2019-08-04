export const UPDATE_SUBREDDIT = "UPDATE_SUBREDDIT";
export const REMOVE_SUBREDDIT = "REMOVE_SUBREDDIT";

const initialState = {
    allIds: [],
    byIds: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case UPDATE_SUBREDDIT: {
        const { id, content } = action.payload;
        return {
          ...state,
          allIds: [...state.allIds, id],
          byIds: {
            ...state.byIds,
            [id]: {
              content,
              completed: false
            }
          }
        };
      }
      case REMOVE_SUBREDDIT: {
        const { id } = action.payload;
        return {
          ...state,
          byIds: {
            ...state.byIds,
            [id]: {
              ...state.byIds[id],
              completed: !state.byIds[id].completed
            }
          }
        };
      }
      default:
        return state;
    }
  }
  
