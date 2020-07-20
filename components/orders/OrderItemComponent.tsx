import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {OrderItemModel} from '@app/models';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '@app/themes';

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
              color={Colors.primaryColor}
              onPress={() => setIsExpand(!isExpand)}
            />
          ) : (
            <Icon
              name="plus"
              size={20}
              color={Colors.iconColor}
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
      {item.orderStatus === 'Open' && (
        <>
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
                style={{
                  ...styles.timeLineLabel,
                  ...styles.timeLineLabelActive,
                  paddingLeft: 15,
                }}>
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
        </>
      )}
      {isExpand && (
        <View style={styles.innerItem}>
          <View style={styles.divider}></View>
          <View>
            <Text style={styles.title}>Shipping Details</Text>
            <View style={styles.card}>
              <View style={styles.container}>
                <Text style={{...styles.titleContent, ...styles.name}}>
                  Jestin James
                </Text>
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
                <Text style={styles.biggerTitleContent}>Grand Total</Text>
                <Text style={styles.biggerTitleContent}>₹786</Text>
              </View>
            </View>
          </View>
          {item.orderStatus === 'Open' ? (
            <Button
              onPress={() => {}}
              title="Cancel Order"
              color={Colors.primaryColor}
            />
          ) : (
            <View style={{...styles.card, ...styles.help}}>
              <Icon name="phone" size={20} color={Colors.primaryColor} />
              <Text style={styles.helpText}>Need Help?</Text>
            </View>
          )}
        </View>
      )}

      <View style={styles.divider}></View>

      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon name="shop" size={20} color={Colors.iconColor} />
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
    shadowColor: Colors.darkColor,
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
    shadowColor: Colors.darkColor,
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
    color: Colors.lightColor,
    fontSize: 13,
  },
  subTitle: {
    color: Colors.lightColor,
    fontSize: 10,
  },
  titleContent: {
    color: Colors.darkColor,
    fontWeight: 'bold',
  },
  biggerTitleContent: {
    color: Colors.darkColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    color: Colors.lightColor,
    fontSize: 12,
  },
  name: {
    fontSize: 14,
  },
  addressType: {
    fontWeight: 'bold',
    backgroundColor: '#FFEFDB',
    color: Colors.primaryColor,
    borderWidth: 2,
    borderColor: Colors.primaryColor,
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
    borderTopColor: Colors.primaryColor,
    borderTopWidth: 1,
    flexGrow: 1,
    marginTop: 16,
    marginBottom: 8,
  },
  timeLineLabel: {
    color: Colors.lightColor,
    fontSize: 10,
  },
  timeLineLabelActive: {
    fontWeight: 'bold',
    color: Colors.darkColor,
  },
  circleActive: {
    width: 12,
    height: 12,
    backgroundColor: Colors.primaryColor,
    borderRadius: 15,
    position: 'absolute',
    top: -7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primaryColor,
    textAlign: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: Colors.whiteColor,
    borderRadius: 15,
    position: 'absolute',
    top: -6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primaryColor,
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  divider: {
    borderBottomColor: Colors.dividerColor,
    borderBottomWidth: 1,
    marginHorizontal: -8,
    marginVertical: 10,
  },
  help: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  helpText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
