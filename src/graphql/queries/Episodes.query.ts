import { gql } from "@apollo/client";
import { InfoFragment } from "../fragments/Info.fragment";

export const GET_EPISODES = gql`
  ${InfoFragment}
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        ...InfoFragment
      }
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;
