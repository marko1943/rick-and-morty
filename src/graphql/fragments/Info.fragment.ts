import { gql } from "@apollo/client";

export const InfoFragment = gql`
  fragment InfoFragment on Info {
    count
    pages
    next
    prev
  }
`;
