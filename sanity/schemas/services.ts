export default {
    name: "service",
    type: "document",
    title: "Service",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Title of the service",
      },
      {
        name: "price",
        type: "string",
        title: "Price",
        description: "Price of the service",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
        description: "Description of the service",
      },
      {
        name: "features",
        type: "array",
        title: "Features",
        description: "Key features of the service",
        of: [{ type: "string" }],
      },
      {
        name: "link",
        type: "url",
        title: "Link",
        description: "URL for more information or to purchase the service",
      },
    ],
  };
  