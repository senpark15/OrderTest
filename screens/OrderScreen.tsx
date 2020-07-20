import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {OrderItemModel} from '@app/models';
import {OrderItem} from '@app/components/orders';
import {OrderService} from '@app/services';
import SwitchSelector from 'react-native-switch-selector';
import {Colors} from '@app/themes';

export const OrderScreen = () => {
  const orderList = OrderService.getOrders();

  const [orders, setOrders] = useState(
    orderList.filter((p) => p.orderStatus === 'Open'),
  );

  const changeTab = (value: string) => {
    setOrders([...orderList.filter((p) => p.orderStatus === value)]);
  };

  const renderItem = ({item}: any) => <OrderItem item={item} />;

  return (
    <>
      <View style={styles.headerItem}>
        <SwitchSelector
          initial={0}
          onPress={(value: string) => changeTab(value)}
          textColor={Colors.switchInActiveLabelColor}
          selectedColor={Colors.switchActiveLabelColor}
          buttonColor={Colors.switchActiveButtonColor}
          borderColor={Colors.switchBorderColor}
          backgroundColor={Colors.switchBackgrondColor}
          hasPadding
          options={[
            {label: 'Open Orders', value: 'Open'},
            {label: 'Delivery', value: 'Delivery'},
          ]}
        />
      </View>
      <FlatList
        data={orders}
        style={{marginBottom: 50}}
        renderItem={renderItem}
        keyExtractor={(item: OrderItemModel) => item.orderId}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerItem: {
    marginVertical: 5,
    marginHorizontal: 16,
  },
});
