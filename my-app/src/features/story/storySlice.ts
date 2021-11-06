import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { Session } from "../../models/Session";
import { StoryAction } from "../../models/StoryAction";

export interface StoryState {
  players: Array<string>,// this will be a real class
  actors: Array<string>, // this will be a real class
  sessions: Array<Session>,
  actions: Array<StoryAction>, // this should be moved....
  tags: Array<string>
}


const initialState: StoryState = {
  players: ['Bob', 'Chip', 'Dale'],
  actors: ['Zariel', 'Bel', 'Tiamat'],
  actions: [],
  sessions: [],
  tags: ['Cool Quote', 'Epic Action', 'Funny', 'Major Decision Point']
}

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    addAction: (state, action: PayloadAction<StoryAction>) => {
      state.actions.push(action.payload);
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.players.push('foo');
    },
    decrement: (state) => {
      state.players.push('bear');
    },
  }
})

export const selectPlayers = (state: RootState) => state.story.players;
export const selectTags = (state: RootState) => state.story.tags;
export const selectActions = (state: RootState) => state.story.actions;

export const { increment, decrement, addAction } = storySlice.actions;
export default storySlice.reducer;