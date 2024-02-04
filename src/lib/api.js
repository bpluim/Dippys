// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
import { SIDE_BY_SIDE_GRAPHQL, ARTICLE_GRAPHQL, NAV_GRAPHQL } from "./queries";

async function fetchGraphQL(query, preview = false) {
  return fetch(
   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.knowledgeArticleCollection?.items;
}

function extractHeaderInfo(fetchResponse) {
  return fetchResponse?.data?.navbar;
}

// Get all Articles
export async function getAllArticles(
  limit = 3,
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(articles);
}

// Get specific article
export async function getArticle(
  slug,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}

// Get header info
export async function getHeaderInfo(
  isDraftMode = false
) {
  const headerInfo = await fetchGraphQL(
    `query {${NAV_GRAPHQL}}`,
      isDraftMode
  );

  return extractHeaderInfo(headerInfo);
}

// Get side by side info
export async function getSideBySide(
  title,
  isDraftMode = false
) {
  const sideBySide = await fetchGraphQL(
    `query {
      sideBySideSectionCollection(where:{title: "${title}"}, limit: 1, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${SIDE_BY_SIDE_GRAPHQL}
        }
      }
    }`,
      isDraftMode
  );

  return sideBySide?.data?.sideBySideSectionCollection?.items[0];
}