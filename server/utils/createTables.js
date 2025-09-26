import {createUserTable} from "../models/userTable"
import {createOrderItemTable} from "../models/orderItemsTable"
import {createOrdersTable} from "../models/ordersTable"
import {createPaymentsTable} from "../models/paymentsTable"
import {createProductReviewsTable} from "../models/productReviewsTable"
import {createProductsTable} from "../models/productTable"
import {createShippingInfoTable} from "../models/shippinginfoTable"

export const createTables = async () => {
    try {
        await createUserTable();
        await createOrderItemTable();
        await createOrdersTable();
        await createPaymentsTable();
        await createProductReviewsTable();
        await createProductsTable();
        await createShippingInfoTable();
        console.log("All Tables create successfully");
    } catch (error) {
        console.log("Error Creating Tables", error);
    }
}