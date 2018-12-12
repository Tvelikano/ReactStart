import React from "react";
import PropTypes from "prop-types";

export default class Add extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		const author = this.getAuthor.value;
		const text = this.getText.value;
		const bigText = this.getBigText.value;
		const data = {
			id: +new Date(),
			author,
			text,
			bigText,
			visible: false,
		};

		this.props.addArticle(data);
	};

	render() {
		return (
			<form className="add" onSubmit={this.handleSubmit}>
				<input
					required
					id="author"
					type="text"
					ref={input => (this.getAuthor = input)}
					className="add__author"
					placeholder="Ваше имя"
				/>
				<textarea
					required
					id="text"
					className="add__text"
					ref={input => (this.getText = input)}
					placeholder="Заголовок новости"
				/>
				<textarea
					required
					id="bigText"
					className="add__text"
					ref={input => (this.getBigText = input)}
					placeholder="Описание новости"
				/>
				<label className="add__checkrule">
					<input onChange={this.onAgreeChangeHandler} type="checkbox" /> Я
					согласен с правилами
				</label>
				<button className="add__btn">Добавить новость</button>
			</form>
		);
	}
}

Add.propTypes = {
	addArticle: PropTypes.func.isRequired,
};
