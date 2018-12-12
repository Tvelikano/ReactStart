import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { ping } from "./enchancers/ping";

export const store = createStore(
	rootReducer,
	applyMiddleware(thunk, logger, ping)
);
