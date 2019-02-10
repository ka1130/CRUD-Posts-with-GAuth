export default {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://example.com/root.json",
  type: "object",
  title: "The Root Schema",
  required: ["posts", "singlePost", "auth", "form"],
  properties: {
    posts: {
      $id: "#/properties/posts",
      type: "array",
      title: "The Posts Schema",
      items: {
        $id: "#/properties/posts/items",
        type: "object",
        title: "The Items Schema",
        required: ["userId", "id", "title", "body"],
        properties: {
          userId: {
            $id: "#/properties/posts/items/properties/userId",
            type: "integer",
            title: "The Userid Schema",
            default: 0,
            examples: [1]
          },
          id: {
            $id: "#/properties/posts/items/properties/id",
            type: "integer",
            title: "The Id Schema",
            default: 0,
            examples: [9]
          },
          title: {
            $id: "#/properties/posts/items/properties/title",
            type: "string",
            title: "The Title Schema",
            default: "",
            examples: ["nesciunt iure omnis dolorem tempora et accusantium"],
            pattern: "^(.*)$"
          },
          body: {
            $id: "#/properties/posts/items/properties/body",
            type: "string",
            title: "The Body Schema",
            default: "",
            examples: [
              "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
            ],
            pattern: "^(.*)$"
          }
        }
      }
    },
    singlePost: {
      $id: "#/properties/singlePost",
      type: "object",
      title: "The Singlepost Schema",
      required: ["userId", "id", "title", "body"],
      properties: {
        userId: {
          $id: "#/properties/singlePost/properties/userId",
          type: "integer",
          title: "The Userid Schema",
          default: 0,
          examples: [1]
        },
        id: {
          $id: "#/properties/singlePost/properties/id",
          type: "integer",
          title: "The Id Schema",
          default: 0,
          examples: [9]
        },
        title: {
          $id: "#/properties/singlePost/properties/title",
          type: "string",
          title: "The Title Schema",
          default: "",
          examples: ["nesciunt iure omnis dolorem tempora et accusantium"],
          pattern: "^(.*)$"
        },
        body: {
          $id: "#/properties/singlePost/properties/body",
          type: "string",
          title: "The Body Schema",
          default: "",
          examples: [
            "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
          ],
          pattern: "^(.*)$"
        }
      }
    },
    auth: {
      $id: "#/properties/auth",
      type: "boolean",
      title: "The Auth Schema",
      default: false,
      examples: [true]
    },
    form: {
      $id: "#/properties/form",
      type: "object",
      title: "The Form Schema"
    }
  }
};
