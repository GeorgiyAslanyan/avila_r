import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SUNITY_PROJECT_ID!;


export default defineCliConfig({
  api: {
    projectId,
    dataset: 'production'
  }
})
