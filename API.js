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
