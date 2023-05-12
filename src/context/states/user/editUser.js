const getEditUser = () => ({
    loading: false,
    step: 0,
    name: {
        value: '',
        error: ''
    },
    father_name: {
        value: '',
        error: ''
    },
    mother_name: {
        value: '',
        error: ''
    },
    sex: {
        value: '',
        error: ''
    },
    birthday: {
        value: new Date(),
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
        value: ['_'],
        error: ''
    }
})

export { getEditUser }