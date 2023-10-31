
const Order = require('../Schema/orderSchema'); 
const User = require('../Schema/userSchema'); 
const Package = require('../Schema/packageSchema'); 
// const Product = require('../Schema/productSchema'); 

exports.createOrder = async (req, res) => {
  try {
    const { userId, rentalObject, package, bookingDateArrival, bookingDateDeparture, guest, status } = req.body;

    const userA = await User.findById(userId);
    const selectedPackage = await Package.findById(package);
    // const productA = await Product.findById(product);

    const randomStr = generateRandomString(10);

    function generateRandomString(length) {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789!?';
      let randomString = '';

      for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * characters.length);
                 randomString += characters.charAt(randomIndex);
             }
         return randomString;
      }

   if (!userA || !selectedPackage) {
      return res.status(400).json({ error: 'User or package not found' });
    }
  
    // if(randomStr){
    //   return res.status(404).json({ error: 'booking already exists' });
    // }

    const order = new Order({
      userId: userA._id,
      package: selectedPackage._id,
      rentalObject,
      bookingDateArrival,
      bookingDateDeparture,
      guest,
      status,
      bookingReference: randomStr
      // Other order-specific fields
    });

    await order.save();

    return res.status(200).json({ message: 'Order created successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



// const Order = require('../Schema/orderSchema')

// // CREATE

// exports.createNewOrder = async (req, res) => {
//     const { orderRows, status } = req.body

//     if(!orderRows) {
//         return res.status(400).json({
//             message: "you need to enter all the fields"
//         })
//     }
//     try {
//         const data = await Order.create({
//             orderRows,
//             userId: req.userId,
//             status

//         })
//       res.status(201).json({ userId: data.userId })



//     } catch (err) {
//         return res.status(500).json({
//             message: "something went wrong when createing the order",
//             err: err.message,
//         })
//     }
// }

// // exports.getMyOrder = async (req, res) => {

// //     const orders = await Order.find({userId: req.userId})

// //     if(!orders){
// //         return res.status(404).json({message: 'Could not fint the orders'})
// //     }

// //     res.status(200).json(orders)
// // }


// exports.getOrders = async (req, res) =>{
//     const orders = await Order.find().populate({
//         path: 'userId', 
//         select: "_id email "
//     })
//     if(!orders){
//         return res.status(404).json({message: 'Could not fint the orders'})
//     }

//     res.status(200).json(orders)
// }

// exports.getOrderById = async (req, res) => {
//     const orderId = req.params.id;
  
//     try {
//       const order = await Order.findById(orderId);
  
//       if (!order) {
//         return res.status(404).json({ message: 'Order not found' });
//       }
  
//       res.status(200).json(order);
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong' });
//     }
//   };

//   exports.updateStatus = async (req, res) => {
//     try {
//       const status = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
//       res.status(200).json(status)
//     } catch (error) {
//       return res.status(404).json({message: 'Could not update status'})
//     }
//   }