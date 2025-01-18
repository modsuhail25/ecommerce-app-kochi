import Order from "../models/orderModel.js";

const createOrder = async (req, res) => {
  const {
    cartItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentResult,
  } = req.body;

  if (cartItems && cartItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else {
    const order = new Order({
      orderItems: cartItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paymentResult: { id: paymentResult },
    });

    const createdOrder = await order.save();
    res.status(200).json(createdOrder);
  }
};

const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

const getOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
};

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
};

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
};

export {
  createOrder,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
};
