import { connect } from "react-redux";
import Add from "../components/Add";
import { addArticle } from "../actions/NewsActions";

const mapDispatchToProps = dispatch => {
	return {
		addArticle: data => dispatch(addArticle(data)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Add);
