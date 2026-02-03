// data.js
// This file holds the "data source" for the site.
// In real apps, this would come from an API. For now it's local.

window.SITE_ITEMS = [
  {
    id: "ex-1",
    title: "REST endpoints (GET/POST)",
    category: "backend",
    tags: ["http", "api", "json"],
    summary:
      "A REST endpoint is a URL + HTTP method mapping that triggers a specific server handler (e.g., GET /reviews).",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
  },
  {
    id: "ex-2",
    title: "CORS in one sentence",
    category: "backend",
    tags: ["cors", "browser", "security"],
    summary:
      "CORS is enforced by the browser to control whether JavaScript can read responses from another origin.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
  },
  {
    id: "ex-3",
    title: "Express middleware pipeline",
    category: "backend",
    tags: ["express", "middleware", "routing"],
    summary:
      "Middleware are functions registered in order. Each can modify req/res, end the response, or call next().",
    link: "https://expressjs.com/en/guide/using-middleware.html"
  },
  {
    id: "ex-4",
    title: "MongoDB document model",
    category: "database",
    tags: ["mongodb", "document", "subdocument"],
    summary:
      "A document is a single JSON-like record. Embed sub-documents for data commonly read together; avoid unbounded arrays.",
    link: "https://www.mongodb.com/docs/manual/core/data-modeling-introduction/"
  },
  {
    id: "ex-5",
    title: "JS DOM: createElement + appendChild",
    category: "frontend",
    tags: ["dom", "javascript", "html"],
    summary:
      "DOM APIs create and modify real page elements. createElement makes an element in memory; appendChild attaches it to the page.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"
  },
  {
    id: "ex-6",
    title: "CSS selectors and className",
    category: "frontend",
    tags: ["css", "selectors", "styling"],
    summary:
      "CSS matches elements via selectors (e.g., .card). In HTML it’s class=\"card\"; in JS/React it’s className=\"card\".",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors"
  },
  {
    id: "ex-7",
    title: "State vs connection (stateless HTTP)",
    category: "networking",
    tags: ["stateless", "keep-alive", "http"],
    summary:
      "Keep-alive reuses the same TCP pipe for speed; stateless means the server does not store user-specific memory between requests.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x"
  }
];
