import {
	GET_NEWS_REQUEST,
	GET_NEWS_SUCCESS,
	GET_NEWS_FAIL,
	SHOW_BIGTEXT,
	ADD_ARTICLE,
	DELETE_ARTICLE,
	EDIT_ARTICLE,
	UPDATE_ARTICLE,
} from "../actions/NewsActions";

const initialState = {
	data: [],
	isLoading: false,
	error: "",
};

export function newsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_NEWS_REQUEST:
			return { ...state, isLoading: true, error: "" };

		case GET_NEWS_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
				error: "",
			};

		case GET_NEWS_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload.message,
			};

		case SHOW_BIGTEXT:
			return {
				...state,
				data: state.data.map(item =>
					item.id === action.id ? { ...item, visible: true } : item
				),
			};

		case ADD_ARTICLE:
			return {
				...state,
				data: [...state.data, action.data],
			};

		case DELETE_ARTICLE:
		return {
			...state,
			data: state.data.filter(item => item.id !== action.id),
		};

		case EDIT_ARTICLE:
		return {
			...state,
			data: state.data.map(item =>
				item.id === action.id ? {...item, isEditing: !item.isEditing } : item
			),
		}

		case UPDATE_ARTICLE:
		return {
			...state,
			data: state.data.map(item => 
				item.id === action.id ? {
						...item, 
						author: action.data.author,
						text: action.data.text,
						bigText: action.data.bigText,
						isEditing: !item.isEditing }
						: item
			),
		}

		default:
			return state;
	}
}
