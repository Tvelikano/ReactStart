import { connect } from "react-redux";
import News from "../components/News";
import { getNews, showBigText, deleteArticle, editArticle, updateArticle } from "../actions/NewsActions";

const mapStateToProps = store => {
	return {
		data: store.news,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getNews: () => dispatch(getNews()),
		showBigText: id => dispatch(showBigText(id)),
		deleteArticle: id => dispatch(deleteArticle(id)),
		editArticle: id => dispatch(editArticle(id)),
		updateArticle: (id, data) => dispatch(updateArticle(id, data))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(News);
