import { color } from "@mui/system";

const sxStyles = {
    'sectionTitle': {
        fontWeight: '500',
        mb: '10px',
        fontSize: {
            xl: '2.5rem',
            lg: '2.25rem',
            md: '2rem',
            sm: '1.75rem',
            xs: '1.5rem'
        }
    },
    'sectionDescription': {
        fontWeight: 'light',
        m: 0,
        fontSize: '1rem'
    },
    'navContainer': {
        padding: {
            md: '16px',
            xs: '0px',
        }
    },
    'navbar': {
        top: {
            md: '2.25rem',
            xs: '0rem'
        }
    },
    'navDesk': {
        display: {
            xs: "none",
            md: "flex"
        }
    },
    'navMobile': {
        backgroundColor: '#fff',
        display: {
            xs: "block",
            md: "none"
        }
    },
    'menuIcon': {
        fontSize: '2.5rem'
    },
    'titleOne': {
        fontWeight: 'bold',
        m: 0,
        fontSize: {
            xl: '2.75rem',
            lg: '2.5rem',
            md: '2rem',
            sm: '1.5rem',
            xs: '1.5rem'
        },
        textAlign: {
            md: 'left',
            xs: 'center',
        }
    },
    'titleTwo': {
        fontWeight: 'light',
        mb: "40px",
        fontSize: {
            xl: '1.75rem',
            lg: '1.75rem',
            md: '1.5rem',
            sm: '1.25rem',
            xs: '1rem'
        },
        textAlign: {
            md: 'left',
            xs: 'center',
        },
        marginBottom: {
            md: '40px',
            md: '0px',
        },
        padding: {
            md: '0px',
            xs: '0 10px'
        },
    },
    'headerContainer': {
        paddingTop: { md: '10.75rem', sm: '6rem', xs: '6rem' },
        paddingLeft: { md: '1rem', xs: '0' },
        paddingRight: { md: '1rem', xs: '0' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    'headerBox': {
        padding: {
            md: '0 1rem',
            xs: '0'
        },
    },
    'headerImg': {
        alignSelf: 'end',
        display: 'flex',
        justifyContent: {
            md: 'end',
            xs: 'center !important',
        },
        alignItems: {
            md: 'auto',
            xs: 'center !important',
        },
    },
    'catHome': {
        display: {
            lg: 'block',
            md: 'none',
            sm: 'block',
            xs: 'none',
        }
    },
    'catHomeMobile': {
        display: {
            lg: 'none',
            md: 'flex',
            sm: 'none',
            xs: 'flex',
        },
        overflow: 'auto',
    },
    'catCardMobile': {
        display: 'inline-block',
        color: 'white',
        textAlign: 'center',
        padding: '14px',
        textDecoration: 'none',
    },
    'searchBox': {
        marginTop: {
            md: '6rem',
            xs: '10px',
        },
        marginBottom: {
            md: '2rem',
            xs: '2rem',
        },
        padding: {
            md: '0',
            xs: '0 1rem'
        },
    },
    'btnMob': {
        borderRadius: '0px',
        fontSize: '0.7rem',
        borderColor: '#000',
        padding: '3px 10px 1px',
        color: '#000 !important',
        
    },
    'alignSelfCenter': {
        alignSelf: 'center',
    },
    'footerTitles': {
        fontWeight: 'bold',
        m: '0',
        px: '15px',
        fontSize: {
            xl: '1.5rem',
            lg: '1.5rem',
            md: '1.25rem',
            sm: '1rem',
            xs: '1rem'
        }
    },
    'footerLink': {
        m: '0',
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    'footerDes': {
        m: '0',
    },
    'proImgColMobile': {
        display: {
            sm: 'none',
            xs: 'flex'
        }
    },
    'proImgColDesk': {
        display: {
            sm: 'flex',
            xs: 'none'
        }
    },
    'vsDesk': {
        display: {
            md: 'flex',
            xs: 'none'
        }
    },
    'vsMob': {
        display: {
            md: 'none',
            xs: 'block'
        }
    },
    'couponOccasion': {
        fontWeight: 'bold',
        m: 0,
        fontSize: '1rem',
        color: '#fff'
    },
    'couponName': {
        m: 0,
        fontSize: '1rem',
        color: '#000'
    },
    'couponDate': {
        my: '2px',
        fontSize: '0.6rem',
        color: '#000'
    },
    'couponPercentage': {
        fontWeight: 'bold',
        my: '2px',
        fontSize: '1.6rem',
    },
    'couponOff': {
        fontWeight: 'bold',
        mb: '8px',
        ml: '5px',
        fontSize: '0.7rem',
        color: '#000'
    },
    'couponDes': {
        m: 0,
        fontSize: '0.7rem',
        color: '#000'
    },
    'numberCount': {
        mb: '0',
        color: '#666',
        fontSize: {
            xl: '2.25rem',
            lg: '2rem',
            md: '1.8rem',
            sm: '1.5rem',
            xs: '1.25rem'
        }
    },
    'nameCount': {
        mb: '0',
        color: '#000',
        fontSize: {
            xl: '1.3rem',
            lg: '1.2rem',
            md: '1.1rem',
            sm: '1rem',
            xs: '0.9rem'
        }
    },
    'countDesktop': {
        display: {
            md: 'block',
            xs: 'none',
        }
    },
    'countMobile': {
        display: {
            md: 'none',
            xs: 'block',
        }
    },
    'sideDesk': {
        display: {
            md: 'flex',
            xs: 'none'
        }
    },
    'sideMob': {
        display: {
            md: 'none',
            xs: 'block'
        }
    },
    'containerInnDesk': {
        display: {
            md: 'block',
            xs: 'none',
        }
    },
    'containerInnMob': {
        display: {
            md: 'none',
            xs: 'flex',
        }
    },
    'noneMobile': {
        display: { md: 'block', xs: 'none' }
    },
    'noneDesktop': {
        display: { md: 'none', xs: 'block' }
    },
    'cardPro': {
        border: '1px solid #e0e0e0',
        boxShadow: 0,
        borderRadius: '0px'
    },
    'cardProfigure': {
        height: '12.5rem;',
        display: 'flex',
        alignItems: 'center',
    },
    'cardProfigureInn': {
        display: 'flex',
        width: '75%',
        height: '75%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        bgColor: 'transparent',
        margin: 'auto',
    },
    'bestBtn': {
        backgroundColor: '#f5cc26',
        border: '2px solid #8a56b5',
        color:' #8a56b5',
        position: 'fixed',
        bottom: '2.5%',
        left: '4.5%',
        right: '4.5%',
        zIndex: 1,
        width: '91%',
        fontWeight: 'bolder',
        borderRadius: '0px',
        fontSize: '1rem',
        boxShadow: '0 2.5px 5px 0px rgba(0, 0, 0, 0.3)',
        margin: 'auto',
        height: '3rem',
        display: { 
            md: 'none', 
            xs: 'flex' 
        },
        '&:hover': {
            backgroundColor: '#fff',
            color: '#8a56b5',
        }
    },
    'closeBtn': {
        position: 'fixed',
        backgroundColor: '#fff',
        top: 0,
        zIndex: 1,
        left: 0,
        right: 0,
        width: '100%',
        height: '3rem',
        minWidth: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxShadow: '10px 0 10px 0 rgba(0, 0, 0, 0.1)',
        '&:hover': {
            backgroundColor: '#fff',
        }
    },
    'btnScroll': {
        backgroundColor: '#8a56b5',
        position: 'fixed',
        bottom: {
            lg: '2rem',
            xs: '5rem',
        },
        right: {
            lg: '1.5%',
            xs: '4.5%'
        },
        color: '#fff',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: '0px',
        zIndex: 1000,
        '&:hover': {
            backgroundColor: '#fff',
            color: '#8a56b5',
        }
    }
};

export default sxStyles;