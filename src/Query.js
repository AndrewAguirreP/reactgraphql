// const githubQuery = {
//     query:`
//     {
//         viewer {
//           name
//           repositories(first: 10) {
//             nodes {
//               name
//               description
//               id
//               url
//             }
//           }
//         }
//       }
//     `
//   }

const githubQuery = {
  query: `{
    viewer {
      name
    }
    search(
      query: "user:andrewaguirrep sort:updated-desc"
      type: REPOSITORY
      first: 10
    ) {
      nodes {
        ... on Repository {
          name
          description
          id
          url
        }
      }
    }
  }`
};

export default githubQuery;