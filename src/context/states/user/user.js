const getUser = () => ({
    id_user: 0,
    email: '',
    password: '',
    create_date: new Date(),
    person: {
        id_person: 0,
        name: '',
        last_name: '',
        birthday: new Date(),
        sex: {
            id_sex: 0,
            sex: ''
        },
        settlement: {
            id_settlement: 0,
            name: '',
            pc: {
                id_pc: 0,
                state: {
                    id_state: 0,
                    state: ''
                },
                municipality: {
                    id_municipality: 0,
                    municipality: ''
                }
            },
            settlement_type: {
                id_settllement_type: 0,
                settllement_type: ''
            }
        }
    },
    user_type: {
        id_user_type: 0,
        user_type: ''
    }
})

export { getUser }