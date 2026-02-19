const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendOrderConfirmation = functions.firestore
    .document('orders/{orderId}')
    .onCreate(async (snap, context) => {
        const order = snap.data();
        console.log(`New order received: ${context.params.orderId} for amount ${order.totalPrice}`);
        // Logic for email/SMS confirmation would go here
        return null;
    });

exports.updateMenuStats = functions.firestore
    .document('orders/{orderId}')
    .onUpdate(async (change, context) => {
        // Logic for analytics
        return null;
    });
