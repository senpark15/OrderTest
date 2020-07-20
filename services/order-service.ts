import { OrderItemModel } from "models";

class OrderServiceImpl {

    getOrders(): OrderItemModel[] {
        const orders: OrderItemModel[] = [
            {
                orderId: '123456711',
                orderedDate: new Date(),
                total: 500,
                orderStatus: 'Open'
            },
            {
                orderId: '752456782',
                orderedDate: new Date(),
                total: 756,
                orderStatus: 'Open'
            },
            {
                orderId: '256456783',
                orderedDate: new Date(),
                total: 550,
                orderStatus: 'Open'
            },
            {
                orderId: '123456715',
                orderedDate: new Date(),
                total: 628,
                orderStatus: 'Delivery'
            },
            {
                orderId: '752456787',
                orderedDate: new Date(),
                total: 652,
                orderStatus: 'Delivery'
            },
            {
                orderId: '256456788',
                orderedDate: new Date(),
                total: 1025,
                orderStatus: 'Delivery'
            },
        ];
        return orders;
    }
}

export const OrderService = new OrderServiceImpl();