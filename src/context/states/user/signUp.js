const getSignUp = () => ({
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
    email: {
        value: '',
        confirmation: '',
        error: ''
    },
    password: {
        value: '',
        confirmation: '',
        error: '',
        show_password: false
    },
})

export { getSignUp }