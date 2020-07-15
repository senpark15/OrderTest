import { OrderItemModel } from "models";

class OrderServiceImpl {

    getOrders(): OrderItemModel[] {
        const orders: OrderItemModel[] = [
            {
                orderId: '123456711',
                orderedDate: new Date(),
                total: 500,
            },
            {
                orderId: '752456789',
                orderedDate: new Date(),
                total: 756,
            },
            {
                orderId: '256456789',
                orderedDate: new Date(),
                total: 800,
            },
        ];
        return orders;
    }
}

export const OrderService = new OrderServiceImpl();