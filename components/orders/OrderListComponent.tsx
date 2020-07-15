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
import {OrderItemModel} from '../../models';
import {OrderItem} from './OrderItemComponent';
import {OrderService} from '../../services';

export const OrderList = () => {
  
  const orders = OrderService.getOrders();

  const renderItem = ({item}: any) => <OrderItem item={item} />;

  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      keyExtractor={(item: OrderItemModel) => item.orderId}
    />
  );
};
