import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'tuentaja',
    dataset: 'production'
  }
})
