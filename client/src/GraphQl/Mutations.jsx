import { gql } from "@apollo/client"


export const ADD_NEW_POST = gql`
mutation Post{
     
    $title: String!
    $text: String!
    $authorUsername: String!
}{
    Post(
        title: $title
        text: $text
        authourUsername: $authorUsername
    )
    token post {
        _id
    }
}
`

export const ADD_NEW_COMMUNITY = gql`
mutation Community {
    $title: String!
    $description: String!
    $image: String!
    $relatedPosts: String!
}{
    Community (
        title: $title
        description: $description
        image: $image
        relatedPosts: $relatedPosts
    )
}

`
