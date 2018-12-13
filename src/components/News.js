import React from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Article from "./Article";

export default class News extends React.Component {
	componentDidMount() {
		this.props.getNews();
	}

	updateHandler = e => {
		this.props.getNews();
	};

	renderTemplate() {
		const { isLoading, data } = this.props.data;
		const {
			showBigText,
			deleteArticle,
			editArticle,
			updateArticle,
		} = this.props;
		let template;

		if (isLoading) {
			template = <p>Загрузка...</p>;
		} else {
			if (data.length) {
				template = (
					<div>
						{data.map(item => (
							<div key={item.id}>
								{item.isEditing ? (
									<Edit
										{...item}
										updateArticle={data => updateArticle(item.id, data)}
									/>
								) : (
									<Article
										{...item}
										showBigText={() => showBigText(item.id)}
										deleteArticle={() => deleteArticle(item.id)}
										editArticle={() => editArticle(item.id)}
									/>
								)}
							</div>
						))}
						<strong className={"news__count"}>
							Всего записей {data.length}
						</strong>
					</div>
				);
			} else {
				template = <p> К сожалению новостей нет </p>;
			}
		}

		return template;
	}

	render() {
		return (
			<div className="news">
				<button onClick={this.updateHandler}>Обновить</button>
				{this.renderTemplate()}
			</div>
		);
	}
}

News.propTypes = {
	getNews: PropTypes.func.isRequired,
	showBigText: PropTypes.func.isRequired,
	deleteArticle: PropTypes.func.isRequired,
	editArticle: PropTypes.func.isRequired,
	updateArticle: PropTypes.func.isRequired,
};
