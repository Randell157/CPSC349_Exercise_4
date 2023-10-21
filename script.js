// https://jsonplaceholder.typicode.com/guide/

async function downloadPosts(page = 1) {
  const postsURL = `https://jsonplaceholder.typicode.com/posts?_page=${page}`;
  const response = await fetch(postsURL);
  const articles = await response.json();
  return articles;
}

async function downloadComments(postId) {
  const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  const response = await fetch(commentsURL);
  const comments = await response.json();
  return comments;
}

function getArticleId(comments) {
  const article = comments.previousElementSibling;
  const data = article.dataset;
  return data.postId;
}

const details = document.getElementsByTagName("details");
for (const detail of details) {
  detail.addEventListener("toggle", async (event) => {
    if (detail.open) {
      const asides = detail.getElementsByTagName("aside");
      const commentsWereDownloaded = asides.length > 0;
      if (!commentsWereDownloaded) {
        const articleId = getArticleId(detail);
        const comments = await downloadComments(articleId);
        console.log(comments);
      }
    }
  });
}

function displayArticle(article){

}
const article = document.getElementsByTagName("article");
const h2 = document.getElementsByTagName("h2");
const aside = document.getElementsByTagName("aside");
const p = document.getElementsByTagName("p");

function displaySummary(){
  const summary = document.getElementsByTagName("summary");

}
const section = document.getElementsByTagName("section");
const header = document.getElementsByTagName("header");
const h3 = document.getElementsByTagName("h3");

const posts = await downloadPosts();
console.log(posts);
