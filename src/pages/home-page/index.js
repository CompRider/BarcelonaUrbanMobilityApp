import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import HomeService from '../../services/home-service';
import ItemCard from './components/item-card';

const initialItemCount = 20;

const HomePage = () => {
  const [first, setFirst] = useState(initialItemCount);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [data, setData] = useState({
    pageInfo: null,
    edges: [],
  });

  useEffect(() => {
    getData();
  }, [first]);

  const getData = () => {
    if (first != initialItemCount) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    let params = {
      first,
      last: initialItemCount,
    };
    HomeService.getData(params)
      .then(response => {
        if (response) {
          const newData = {
            pageInfo: response.pageInfo,
            edges: [...data.edges, ...response.edges],
          };
          setData(newData);
        }
      })
      .catch(error => {
        error?.message && Alert.alert('Error', error.message);
      })
      .finally(() => {
        if (first != initialItemCount) {
          setLoadingMore(false);
        } else {
          setLoading(false);
        }
      });
  };

  const renderEmptyListComponent = () => (
    <Text style={styles.noResultText}>No result found</Text>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} style={styles.loader} />
      ) : (
        <FlatList
          data={data?.edges || []}
          renderItem={({item}) => <ItemCard data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() =>
            !loadingMore &&
            data?.pageInfo?.hasNextPage &&
            setFirst(first + initialItemCount)
          }
          ListEmptyComponent={renderEmptyListComponent}
          ListFooterComponent={() =>
            loadingMore ? (
              <ActivityIndicator
                size={'small'}
                style={{padding: 20, alignSelf: 'center'}}
              />
            ) : null
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    marginTop: 30,
  },
  noResultText: {fontSize: 20, textAlign: 'center', marginTop: 30},
});

export default HomePage;
