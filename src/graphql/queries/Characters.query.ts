import { gql } from "@apollo/client";
import { InfoFragment } from "../fragments/Info.fragment";

export const GET_CHARACTERS = gql`
  ${InfoFragment}
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        ...InfoFragment
      }
      results {
        id
        name
        status
        species
        type
        gender
      }
    }
  }
`;
