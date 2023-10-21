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

const article = document.querySelector("article");

const h2 = document.querySelector("h2");
h2.innerHTML = data.postId.title;
let asides = document.getElementsByTagName("aside");
let ps = document.getElementsByTagName("p");

let summarys = document.getElementsByTagName("summary");
let sections = document.getElementsByTagName("section");
let headers = document.getElementsByTagName("header");
let h3s = document.getElementsByTagName("h3");

const posts = await downloadPosts();
console.log(posts);
