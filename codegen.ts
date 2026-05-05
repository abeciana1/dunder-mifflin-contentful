import type { CodegenConfig } from "@graphql-codegen/cli";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

if (!spaceId) {
  throw new Error("Missing CONTENTFUL_SPACE_ID");
}

if (!deliveryToken) {
  throw new Error("Missing CONTENTFUL_DELIVERY_TOKEN");
}

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`]:
        {
          headers: {
            Authorization: `Bearer ${deliveryToken}`,
          },
        },
    },
  ],
  documents: ["src/**/*.graphql"],
  generates: {
    "src/lib/contentful/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        scalars: {
          DateTime: "string",
          Dimension: "number",
          HexColor: "string",
          JSON: "unknown",
          Quality: "number",
        },
      },
    },
  },
};

export default config;
