import {gql} from '@apollo/client';

export const metroStationQuery = ({first, last}) => gql`
    {
        stations: metroStations(first: ${first}, last: ${last}) {
            pageInfo {
                hasNextPage
            }
            edges {
                node {
                    id
                    name
                }
            }
        }
    }  
`;
