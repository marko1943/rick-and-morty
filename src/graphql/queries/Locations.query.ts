import { gql } from "@apollo/client";
import { InfoFragment } from "../fragments/Info.fragment";

export const GET_LOCATIONS = gql`
  ${InfoFragment}
  query locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        ...InfoFragment
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;
