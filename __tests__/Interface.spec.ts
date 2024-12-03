import { describe, expect, test } from "vitest";

import Interface from "@/generators/Interface";

describe("Comment", () => {
  test("Comment.to() sucessfully", () => {
    expect(() => {
      const result = Interface.of({
        name: "MyType",
        export: true,
        types: [
          {
            name: "myName",
            required: true,
            type: "string",
          },
          {
            name: "myAge",
            required: true,
            type: "number",
          },
          {
            name: "myAddress",
            required: true,
            type: [
              {
                name: "address",
                required: true,
                type: "string",
              },
              {
                name: "code",
                required: true,
                type: "number",
              },
            ],
          },
        ],
      }).to();

      console.log(result);
    }).not.throw();
  });
});
