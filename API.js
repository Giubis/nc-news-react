export async function getArticles() {
  const response = await fetch(
    `https://nc-news-hz0s.onrender.com/api/articles`
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const articles = await response.json();
  return articles;
}

export async function getArticleByID(ID) {
  const response = await fetch(
    `https://nc-news-hz0s.onrender.com/api/articles/${ID}`
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const article = await response.json();
  return article;
}

export async function getTopics() {
  const response = await fetch(`https://nc-news-hz0s.onrender.com/api/topics`);

  if (!response.ok) {
    console.error(response.status);
  }

  const topics = await response.json();
  return topics;
}
