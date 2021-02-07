import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette:{
        primary: {
            main: "#29444B"
        },
        secondary:{
            main: "#f012e9"
        }
    },
    overrides:{
        MuiInput:{
            input:{
                color: "#FBFCFC",
                padding: 8,
                fontWeight: 100,
                fontSize: '1.25rem',
            },
            underline:{
                "&:before":{
                    content: "unset",
                },
                "&:after":{
                    content: "unset",
                },
            }
        }
    }
});