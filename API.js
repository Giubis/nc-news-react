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

export async function getArticleByID(articleID) {
  const response = await fetch(
    `https://nc-news-hz0s.onrender.com/api/articles/${articleID}`
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const article = await response.json();
  return article;
}

export async function getComments(articleID) {
  const response = await fetch(
    `https://nc-news-hz0s.onrender.com/api/articles/${articleID}/comments`
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const comments = await response.json();
  return comments;
}

export async function getTopics() {
  const response = await fetch(`https://nc-news-hz0s.onrender.com/api/topics`);

  if (!response.ok) {
    console.error(response.status);
  }

  const topics = await response.json();
  return topics;
}

export async function getUsers() {
  const response = await fetch(`https://nc-news-hz0s.onrender.com/api/users`);

  if (!response.ok) {
    console.error(response.status);
  }

  const users = await response.json();
  return users;
}

export async function patchArticleVotes(articleID, vote) {
  const response = await fetch(
    `https://nc-news-hz0s.onrender.com/api/articles/${articleID}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inc_votes: vote }),
    }
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const article = await response.json();
  return article;
}
