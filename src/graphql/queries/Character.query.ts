import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
      episode {
        name
      }
    }
  }
`;
