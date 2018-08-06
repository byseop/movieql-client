import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    query {
        movies(limit: 5, rating: 7) {
            title
            genres
            rating
            medium_cover_image
        }
    }
`;

export default HOME_PAGE;