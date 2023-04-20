const getNewPublication = () => ({
    loading: false,
    step: 0,
    description: {
        value: '',
        error: ''
    },
    publication_type: {
        value: '',
        error: ''
    },
    state: {
        value: '',
        error: ''
    },
    municipality: {
        value: '',
        error: ''
    },
    settlement: {
        value: '',
        error: ''
    },
    pc: {
        value: '',
        error: ''
    },
    images: {
        value: [''],
        error: ''
    }
})

export { getNewPublication }