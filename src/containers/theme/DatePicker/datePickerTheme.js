import React from 'react'

const datePickerTheme = () => {

    const sx = () => ({
        "& .MuiPaper-root": {
            borderRadius: '10px',
            "& .MuiPickersCalendarHeader-root": {
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                backgroundColor: 'secondary.main',
                margin: 0,
                padding: 3,
                color: 'white',
                "& .MuiSvgIcon-root": {
                    color: 'white',
                }
            },
            "& .MuiDayCalendar-header": {
                backgroundColor: 'secondary.main',
                "& .MuiTypography-root": {
                    color: 'white',
                },
            },
            "& .MuiPickersSlideTransition-root": {
                "& .MuiButtonBase-root": {
                    color: 'secondary.main',
                },
                "& .Mui-selected": {
                    color: 'white',
                    backgroundColor: 'secondary.main',
                },
                "& .MuiPickersDay-dayWithMargin": {
                    borderColor: 'secondary.main',
                }
            }
        }
    })

    return {
        sx
    }
}

export { datePickerTheme }