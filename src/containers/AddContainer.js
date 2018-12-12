import { connect } from "react-redux";
import Add from "../components/Add";
import { addArticle } from "../actions/NewsActions";

const mapStateToProps = store => {
	return {
		data: store.news,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addArticle: data => dispatch(addArticle(data)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Add);
