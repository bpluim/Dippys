export const ARTICLE_GRAPHQL = `
  sys {
    id
  }
  title
  slug
  summary
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  authorName
  categoryName
  articleImage {
    url
  }
`;

export const NAV_GRAPHQL = `
  navbar (id: "1YylIS655DQlBo2cJJRbnp") {
    logo {
      url
    }
    navLinksCollection {
      items {
        label
        url
        isExternal
      }
    }
  }
`;

export const SIDE_BY_SIDE_GRAPHQL = `
  title
  description
  buttonText
  buttonUrl
  imageLeft
  mobileOverlay
  image {
    url
  }
`