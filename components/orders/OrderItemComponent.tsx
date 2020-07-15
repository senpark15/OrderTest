import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {OrderItemModel} from '../../models';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/Entypo';

type OrderProps = {
  item: OrderItemModel;
};

export const OrderItem: FunctionComponent<OrderProps> = ({item}) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <View style={styles.icon}>
          {isExpand ? (
            <Icon
              name="minus"
              size={20}
              color="#8c8c8c"
              onPress={() => setIsExpand(!isExpand)}
            />
          ) : (
            <Icon
              name="plus"
              size={20}
              color="#8c8c8c"
              onPress={() => setIsExpand(!isExpand)}
            />
          )}
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>ORDER ID</Text>
            <Text style={styles.titleContent}>{item.orderId}</Text>
          </View>
          <View>
            <Text style={styles.title}>PLACED ON</Text>
            <Text style={styles.titleContent}>
              {format(item.orderedDate, 'do MMM,yy')}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>TOTAL</Text>
            <Text style={styles.titleContent}>₹{item.total}</Text>
          </View>
        </View>
      </View>

      <View style={styles.timeLine}>
        <View>
          <Text style={styles.circleActive}></Text>
        </View>
        <View>
          <Text style={styles.circle}></Text>
        </View>
        <View>
          <Text style={styles.circle}></Text>
        </View>
      </View>
      <View style={styles.timeLineContainer}>
        <View>
          <Text
            style={{...styles.timeLineLabel, ...styles.timeLineLabelActive,paddingLeft:15}}>
            Placed
          </Text>
        </View>
        <View>
          <Text style={styles.timeLineLabel}>Out for delivery</Text>
        </View>
        <View>
          <Text style={styles.timeLineLabel}>Delivered</Text>
        </View>
      </View>

      {isExpand && (
        <View style={styles.innerItem}>
          <View style={styles.divider}></View>
          <View>
            <Text style={styles.title}>Shipping Details</Text>
            <View style={styles.card}>
              <View style={styles.container}>
                <Text style={styles.titleContent}>Jestin James</Text>
                <Text style={styles.addressType}>Home</Text>
              </View>
              <Text style={styles.label}>B2-204, Snn Raj Greenbay</Text>
              <Text style={styles.label}>
                1st Main Road, Stadium road, Ernakulam, Kerala
              </Text>
              <Text style={styles.label}>Mob: +91-8945632545</Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>Order Details</Text>
            <View style={styles.card}>
              <View style={styles.container}>
                <Text style={styles.label}>Total Items</Text>
                <Text style={styles.label}>2</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.label}>Sub Total</Text>
                <Text style={styles.label}>₹806</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.label}>Tax Collected</Text>
                <Text style={styles.label}>₹20</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.label}>Discount</Text>
                <Text style={styles.label}>₹20</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.container}>
                <Text style={styles.boggerTitleContent}>Grand Total</Text>
                <Text style={styles.boggerTitleContent}>₹786</Text>
              </View>
            </View>
          </View>

          <Button onPress={() => {}} title="Cancel Order" color="#e97162" />
        </View>
      )}

      <View style={styles.divider}></View>

      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon name="shop" size={20} color="#8c8c8c" />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>New Malabar Store</Text>
            <Text style={styles.subTitle}>Normally Deleiverd in 30 mins</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.title}>4.5km</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
  },
  innerItem: {},
  card: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  title: {
    color: '#8c8c8c',
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#a6a6a6',
    fontSize: 12,
  },
  titleContent: {
    color: '#000',
    fontWeight: 'bold',
  },
  boggerTitleContent: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  label: {
    color: '#80807d',
  },
  addressType: {
    fontWeight: 'bold',
    backgroundColor: '#ffe1de',
    color: '#e97162',
    borderWidth: 2,
    borderColor: '#e97162',
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 0,
    borderRadius: 20,
  },
  timeLineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1,
    marginBottom: 8,
  },
  timeLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#e97162',
    borderTopWidth: 1,
    flexGrow: 1,
    marginTop: 16,
    marginBottom: 8,
  },
  timeLineLabel: {
    color: '#80807d',
    fontSize: 12,
  },
  timeLineLabelActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  circleActive: {
    width: 12,
    height: 12,
    backgroundColor: '#f7ada3',
    borderRadius: 15,
    position: 'absolute',
    top: -7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e97162',
    textAlign: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    position: 'absolute',
    top: -6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e97162',
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  divider: {
    borderBottomColor: '#c7c5c5',
    borderBottomWidth: 1,
    marginHorizontal: -8,
    marginVertical: 10,
  },
});
