// function asyncHandler(fn) {
//   return function (req, res, next) {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   };
// }

// No need of then in this promise because ,we are passing the function inside resolved(),if there is an error we need to pass it to next middleware that errorMiddleware

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
