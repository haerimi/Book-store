import { useEffect, useState } from "react"
import { Order, OrderListItem } from "../models/order.model"
import { fetchOrder, fetchOrders, order } from "../api/order.api";

export const useOrder = () => {
    const [orders, setOrders] = useState<OrderListItem[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    useEffect(() => {
        fetchOrders().then((orders) => {
            setOrders(orders);
        });
    }, []);

    const selectOrderItem = (orderId: number) => {
        // 요청 방어
        if (orders.filter((item) => item.id === orderId)[0].detail) {
            setSelectedItemId(orderId);
            return;
        }
        fetchOrder(orderId).then((orderDetail) => {
            // detail 정보 (배열로 받아옴)
            setSelectedItemId(orderId);
            setOrders(
                orders.map((item) => {
                    if(item.id === orderId) {
                        return {
                            ...item,
                            detail: orderDetail
                        }
                    }
                    return item;
                })
            );
        });
    };

    return { orders, selectedItemId, selectOrderItem };
}