import React from "react";
import PropTypes from "prop-types";

export default class Edit extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		const author = this.getAuthor.value;
		const text = this.getText.value;
		const bigText = this.getBigText.value;
		const data = {
			author,
			text,
			bigText,
		};

		this.props.updateArticle(data);
	};

	render() {
        const {author, text, bigText} = this.props;
		return (
			<form className="add" onSubmit={this.handleSubmit}>
				<input
					required
					id="author"
					type="text"
					ref={input => (this.getAuthor = input)}
					className="add__author"
                    placeholder="Ваше имя"
                    defaultValue={author}
				/>
				<textarea
					required
					id="text"
					className="add__text"
					ref={input => (this.getText = input)}
					placeholder="Заголовок новости"
                    defaultValue={text}
				/>
				<textarea
					required
					id="bigText"
					className="add__text"
					ref={input => (this.getBigText = input)}
					placeholder="Описание новости"
                    defaultValue={bigText}
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

Edit.propTypes = {
	updateArticle: PropTypes.func.isRequired,
};
