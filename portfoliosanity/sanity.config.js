// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
    title: "portfolio-sanity",
    projectId: "ispob9gx",
    dataset: "production",
    plugins: [deskTool()],
    schema: {
        types: schemas,
    },
});