import { connect } from "react-redux";
import News from "../components/News";
import { getNews, showBigText } from "../actions/NewsActions";

const mapStateToProps = store => {
	return {
		data: store.news,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getNews: () => dispatch(getNews()),
		showBigText: id => dispatch(showBigText(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(News);
