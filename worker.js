export default {
  async fetch(request) {
    const url = new URL(request.url);

    // API محصولات
    if (url.pathname === "/api/products" && request.method === "GET") {
      return new Response(
        JSON.stringify([
          {
            id: 1,
            name: "AI Text API",
            price: 99000
          },
          {
            id: 2,
            name: "Data API",
            price: 149000
          },
          {
            id: 3,
            name: "Utility API",
            price: 79000
          }
        ]),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }
      );
    }

    // تست Backend
    if (url.pathname === "/api") {
      return new Response(
        JSON.stringify({
          message: "API HUB Backend is running 🚀"
        }),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }
      );
    }

    return new Response("API HUB API - Not Found", {
      status: 404
    });
  }
};