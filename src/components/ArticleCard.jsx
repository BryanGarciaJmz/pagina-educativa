import './ArticleCard.css'

function ArticleCard({ article }) {
	return (
		<article className="article-card">
			<div className="article-icon">{article.icon}</div>
			<div className="article-content">
				<div className="article-meta">
					<span className="badge">{article.category}</span>
					<span className="dot">•</span>
					<span>{article.date}</span>
					<span className="dot">•</span>
					<span>{article.readTime}</span>
				</div>
				<h3 className="article-title">{article.title}</h3>
				<p className="article-summary">{article.summary}</p>
				<div className="article-footer">
					<div className="author">✍️ {article.author}</div>
					<div className="tags">
						{article.tags?.slice(0, 3).map((t) => (
							<span key={t} className="tag">#{t}</span>
						))}
					</div>
				</div>
			</div>
		</article>
	)
}

export default ArticleCard

