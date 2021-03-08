import { SET_BLOG_POSTS, SET_PROJECT_POSTS, SET_SITE_CONTENT } from './mutations.type'

export const state = () => ({
  blogPosts: [],
  projectPosts: [],
  siteContent: {}
})

export const mutations = {
  [SET_BLOG_POSTS](state, list) {
    state.blogPosts = list
  },
  [SET_PROJECT_POSTS](state, list) {
    state.projectPosts = list
  },
  [SET_SITE_CONTENT](state, list) {
    state.siteContent = list
  }
}

export const actions = {
  getPosts(files) {
    return files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  getSiteContent(files) {
    let siteContent = {}
    files.keys().map((key) => {
      siteContent[key.slice(2, -5)] = files(key)
    })
    return siteContent
  },
  async nuxtServerInit({ commit }) {
    // Blog collection type
    let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/)
    await commit(SET_BLOG_POSTS, actions.getPosts(blogFiles))

    // Project collection type
    let projectFiles = await require.context('~/assets/content/projects/', false, /\.json$/)
    await commit(SET_PROJECT_POSTS, actions.getPosts(projectFiles))

    // Site sections collection type
    let siteSectionsFiles = await require.context('~/assets/content/site/', false, /\.json$/)
    await commit(SET_SITE_CONTENT, actions.getSiteContent(siteSectionsFiles))

    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }
}
