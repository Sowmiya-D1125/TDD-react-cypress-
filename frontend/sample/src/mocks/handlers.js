import { rest } from 'msw';

export const handlers = [
  rest.post("http://localhost:5000/CustomerDetails/login", (req, res, ctx) => {
    // const value = req.json();
    req.json().then((data) => {
      console.log("value", data)
      const { email } = data
      if (email !== "sowmiya@yopmail.com") {
        return res(
          ctx.status(400),
          ctx.json({
            statusCode: 404,
            hasError: true,
            message: 'Hello User, Your Email are Not Registered ,Pls Sign Up'

          })
        );
      }
      return res(
        // ctx.status(200),
        ctx.json({
          hasError: false,
          accesstoken: "12345flaskfjlak",
        })
      );
    });

  }),
  rest.post("https://dummyjson.com/products", (req, res, ctx) => {
    // const value = req.json();
    return res(
      ctx.status(400),
      ctx.json({
        products:
          [
            {
              brand: "Apple",
              category: "smartphones",
              description: "An apple mobile which is nothing like apple",
              discountPercentage: 12.96,
              id: 1,
              images: ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
              price: 549,
              rating: 4.69,
              stock: 94,
              thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
              title: "oidwoidjwd"
            }
          ]


      })
    );


  }),
]