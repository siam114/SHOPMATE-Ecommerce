import {createUserTable} from "../models/userTable.js"
import {createOrderItemTable} from "../models/orderItemsTable.js"
import {createOrdersTable} from "../models/ordersTable.js"
import {createPaymentsTable} from "../models/paymentsTable.js"
import {createProductReviewsTable} from "../models/productReviewsTable.js"
import {createProductsTable} from "../models/productTable.js"
import {createShippingInfoTable} from "../models/shippinginfoTable.js"

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