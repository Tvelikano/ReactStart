import React from "react";
import PropTypes from "prop-types";

const Article = ({ author, text, bigText, visible, showBigText }) => (
	<div className="article">
		<p className="news__author"> {author}: </p>
		<p className="news__text"> {text} </p>
		{!visible && (
			<a onClick={showBigText} href="#readmore" className="news__readmore">
				Подробнее
			</a>
		)}
		{visible && <p className="news__big-text"> {bigText} </p>}
	</div>
);

Article.propTypes = {
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	bigText: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
	showBigText: PropTypes.func.isRequired,
};

export default Article;
