import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/schemas";

const projectId = process.env.NEXT_PUBLIC_SUNITY_PROJECT_ID!;

export default defineConfig({
  name: "default",
  title: "avila",
  basePath: "/studio",


  projectId,
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
