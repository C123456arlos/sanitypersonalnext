import { deskTool } from 'sanity/desk'
import { defineConfig } from 'sanity'
import schemas from './sanity/schemas'
const config = defineConfig({
    projectId: 'vlmo78f5',
    dataset: 'production',
    title: 'personal next',
    apiVersion: '2023-03-04',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})
export default config
