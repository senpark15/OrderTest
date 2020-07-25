import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {OrderItemModel} from '@app/models';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '@app/themes';
import Dash from 'react-native-dash';

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
          <View style={{marginRight: 20}}>
            <Text style={styles.title}>TOTAL</Text>
            <Text style={styles.titleContent}>₹{item.total}</Text>
          </View>
        </View>
      </View>
      {item.orderStatus === 'Open' && (
        <>
          <View style={styles.row}>
            <Dash
              style={styles.timeLineDot}
              dashColor={Colors.primaryColor}
              dashGap={2}
              dashLength={4}
              dashThickness={1}
            />
            <View style={styles.timeLine}>
              <View>
                <Text style={styles.circleActive}></Text>
                <Text style={styles.circleInnerActive}></Text>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.circle}></Text>
              </View>
              <View style={{marginRight: 6}}>
                <Text style={{...styles.circle}}></Text>
              </View>
            </View>
            <Dash
              style={styles.timeLineDot}
              dashColor={Colors.primaryColor}
              dashGap={2}
              dashLength={4}
              dashThickness={1}
            />
          </View>
          <View style={styles.timeLineContainer}>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  ...styles.timeLineLabel,
                  ...styles.timeLineLabelActive,
                }}>
                Placed
              </Text>
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={styles.timeLineLabel}>Out for delivery</Text>
            </View>
            <View style={{marginRight: 10}}>
              <Text style={styles.timeLineLabel}>Delivered</Text>
            </View>
          </View>
        </>
      )}
      {isExpand && (
        <View style={styles.innerItem}>
          <View style={styles.divider}></View>
          <View>
            <Text style={styles.itemTitle}>Shipping Details</Text>
            <View style={styles.card}>
              <View style={styles.innerContainerLeft}>
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
          </View>

          <View>
            <Text style={styles.itemTitle}>Order Details</Text>
            <View style={styles.card}>
              <View style={{...styles.container, ...styles.innerContainer}}>
                <Text style={styles.label}>Total Items</Text>
                <Text style={styles.label}>2</Text>
              </View>
              <View style={{...styles.container, ...styles.innerContainer}}>
                <Text style={styles.label}>Sub Total</Text>
                <Text style={styles.label}>₹806</Text>
              </View>
              <View style={{...styles.container, ...styles.innerContainer}}>
                <Text style={styles.label}>Tax Collected</Text>
                <Text style={styles.label}>₹20</Text>
              </View>
              <View style={{...styles.container, ...styles.innerContainer}}>
                <Text style={styles.label}>Discount</Text>
                <Text style={styles.label}>₹20</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={{...styles.container, ...styles.innerContainer}}>
                <Text style={styles.biggerTitleContent}>Grand Total</Text>
                <Text style={styles.biggerTitleContent}>₹786</Text>
              </View>
            </View>
          </View>
          {item.orderStatus === 'Open' ? (
            <View style={{marginVertical: 5}}>
              <Button
                onPress={() => {}}
                title="Cancel Order"
                color={Colors.primaryColor}
              />
            </View>
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
            <Text style={{...styles.title, marginRight: 5}}>4.5km</Text>
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
    borderRadius: 6,
    shadowColor: Colors.shadowColor,
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 0.8,
  },
  innerItem: {},
  card: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 0.5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
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
  itemTitle: {
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
    fontSize: 10,
    backgroundColor: '#FFEFDB',
    color: Colors.primaryColor,
    borderWidth: 1,
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
    justifyContent: 'space-between',
    flexGrow: 1,
    marginBottom: 8,
  },
  timeLineDot: {
    marginTop: 16,
    marginBottom: 7,
    width: 30,
    height: 1,
  },
  timeLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 6,
    height: 6,
    backgroundColor: Colors.whiteColor,
    borderRadius: 12,
    position: 'absolute',
    top: -6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primaryColor,
    textAlign: 'center',
    padding: 4,
  },
  circleInnerActive: {
    width: 6,
    height: 6,
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    borderWidth: 1,
    position: 'absolute',
    top: -4,
    left: 2,
    borderStyle: 'solid',
    borderColor: Colors.primaryColor,
    textAlign: 'center',
  },
  circle: {
    width: 7,
    height: 7,
    backgroundColor: Colors.whiteColor,
    borderRadius: 15,
    position: 'absolute',
    top: -4,
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
  innerContainer: {
    marginLeft: 10,
    marginRight: 30,
  },
  innerContainerLeft: {
    marginLeft: 10,
  },
});
