const getPublications = () => ({
    loading: false,
    publicationList: [],
    publicationFilter: [],
    filter: ''
})

const getPublicationsResume = () => ({
    loading: false,
    publicationList: []
})

export { getPublications, getPublicationsResume }