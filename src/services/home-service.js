import {Alert} from 'react-native';
import {client} from '../APIClient';
import {metroStationQuery} from '../queries/ metro-stations-query';

export default HomeService = {
  getData: async params => {
    try {
      const response = await client.query({
        query: metroStationQuery(params),
      });
      if (response?.data?.stations) {
        return response.data.stations;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      error?.message && Alert.alert('Error', error.message);
      return null;
    }
  },
};
