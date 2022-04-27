import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import PropTypes from 'prop-types';

const ItemCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          {!!data?.node?.name && <Title>{data.node.name}</Title>}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

ItemCard.prototype = {
  data: PropTypes.object.isRequired,
};

export default React.memo(ItemCard);
