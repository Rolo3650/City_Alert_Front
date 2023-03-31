const getLogin = () => ({
    loading: false,
    email: {
        value: '',
        error: ''
    },
    password: {
        value: '',
        error: '',
        show_password: false
    }
})

export { getLogin }