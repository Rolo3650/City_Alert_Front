const regex = () => ({

    email_on_change: /^[^\s@`']*@*[^\s@`']*(\.+[^\s@`']+)*$/,
    email: /^[^\s@`']+@[^\s@`']+(\.+[^\s@`']+)+$/,

})

export { regex }