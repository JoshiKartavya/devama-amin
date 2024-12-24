// import { SanityClient } from "next-sanity";
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "0tew99uq",
    dataset: "production",
    title: "devam portfolio",
    apiVersion: "2024-12-02",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;