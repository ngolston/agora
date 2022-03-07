import { gql } from "@apollo/client"


export const ADD_NEW_COMMUNITY = gql`
query {
    Community {
        title
        description
        image
        relatedPosts
    }

}
`
export const ADD_NEW_POST = gql`
query {
    Post {
      _id
      title
      text
      authorUsername
    }
}
`

