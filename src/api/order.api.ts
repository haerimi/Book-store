import { OrderSheet } from "../models/order.model";
import { requestHandler } from "./http";

// export const order = async (orderData: OrderSheet) => {
//     const response = await httpClient.post('/orders', orderData);
//     return response.data;
// }

export const order = async (orderData: OrderSheet) => {
    return await requestHandler('post', '/orders', orderData);
}

// export const fetchOrders = async () => {
//     const response = await httpClient.get<Order[]>('/orders');
//     return response.data;
// }

export const fetchOrders = async () => {
    return await requestHandler('get', '/orders');
}

// export const fetchOrder = async (orderId: number) => {
//     const response = await httpClient.get<orderDetailItem[]>(`/orders/${orderId}`);
//     return response.data;
// }

export const fetchOrder = async (orderId: number) => {
    return await requestHandler('get', `/orders/${orderId}`);
}