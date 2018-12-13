export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAIL = "GET_NEWS_FAIL";
export const SHOW_BIGTEXT = "SHOW_BIGTEXT";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";

export function getNews() {
	return dispatch => {
		dispatch({
			type: GET_NEWS_REQUEST,
		});

		fetch("http://localhost:3000/data/newsData.json")
			.then(response => {
				return response.json();
			})
			.then(data => {
				data.map(item => (item.visible = false));

				dispatch({
					type: GET_NEWS_SUCCESS,
					payload: data,
				});
			})
			.catch(ex => {
				dispatch({
					type: GET_NEWS_FAIL,
					payload: new Error(ex),
				});
			});
	};
}

export const showBigText = id => ({
	type: SHOW_BIGTEXT,
	id,
});

export const addArticle = data => ({
	type: ADD_ARTICLE,
	data,
});

export const deleteArticle = id => ({
	type: DELETE_ARTICLE,
	id,
});

export const editArticle = id => ({
	type: EDIT_ARTICLE,
	id,
});

export const updateArticle = (id, data) => ({
	type: UPDATE_ARTICLE,
	id,
	data,
});
