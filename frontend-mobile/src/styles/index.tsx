import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const colors = {
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    mediumGray: "#6C6C6C",
    subTitleGray: "#CDCDCD",
    textGray: "#9E9E9E",
    black: "#000000",
    primary: "#FFC700",
    secondary: "#525252",
    borderGray: "#E1E1E1",
    beige: "#937C1C"
};

export const commonCss = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.secondary
    },
});

export const leftHeaderCss = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        justifyContent: 'center'
    },
    emptyView: {
        width: 18,
        height: 18,
    },
    titleTextContainer: {
        marginLeft: 13,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.0124,
        color: colors.black,
    },
});

export const rightHeaderCss = StyleSheet.create({
    container: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: 75,
        height: 26,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.0124,
        color: colors.black,
    }

});

export const buttonIconCss = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        flexDirection: 'row',
        width: 334,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    primaryContainer: {
        borderRadius: 10,
        width: 284,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryText: {
        color: colors.black,
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22,
        letterSpacing: -0.0124,
    },
    arrowContainer: {
        backgroundColor: colors.beige,
        height: 50,
        width: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export const homeCss = StyleSheet.create({
    imageContainer: {
        marginTop: 50
    },
    titleContainer: {
        marginTop: 40
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 35,
        letterSpacing: -0.0124,
        color: colors.white
    },
    subTitleContainer: {
        marginTop: 50,
        alignItems: 'center'
    },
    subTitleText: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.0124,
        color: colors.lightGray
    },
    btnContainer: {
        marginTop: 50
    }
});

export const loginCss = StyleSheet.create({
    titleContainer: {
        marginTop: 80
    },
    btnContainer: {
        marginTop: 34
    },
    titleText: {
        fontSize: 30,
        lineHeight: 41,
        letterSpacing: -0.0124,
        color: colors.white
    },
    inputsContainer: {
        marginTop: 82,
        width: 334,
        height: 132,
        justifyContent: 'space-between',
    },
    inputStyle: {
        width: 334,
        height: 50,
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        backgroundColor: colors.white
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggle: {
        margin: -40,
    }
});

export const movieCardCss = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumGray,
        borderRadius: 10,
        width: 374,
        height: 408,
        paddingVertical: 20,
        marginTop: 18,

        //IOS shadow
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
        shadowColor: colors.black,

        //Android shadow
        elevation: 6
    },
    infosArea: {
        paddingTop: 20,
        padding: 15

    },
    filmImage: {
        width: 374,
        height: 228
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.0124,
        color: colors.white
    },
    yearText: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.0124,
        color: colors.primary
    },
    subTitleText: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.0124,
        color: colors.subTitleGray
    },
    btnDetailsContainer: {
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btnDetailsText: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.0124,
        color: colors.white
    }
});

export const moviesListCss = StyleSheet.create({
    genreContainer: {
        height: 82,
        marginTop: 17,
        backgroundColor: colors.mediumGray,
        width: '100%',
        borderRadius: 10,

        //IOS shadow
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
        shadowColor: colors.black,

        //Android shadow
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 334,
        height: 50,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        padding: 10,
    },
    selectText: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.0124,
        color: colors.white
    },
    modalContainer: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: '#00000033',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        width: 300,
        justifyContent: 'center',
        //alignItems: 'flex-start',
        marginTop: '50%',
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8
    },
    modalItem: {
        width: '100%',
        backgroundColor: colors.lightGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    }

});

export const basicInfoCardCss = StyleSheet.create({
    container: {
        width: 374,
        backgroundColor: colors.mediumGray,
        borderRadius: 20,
        paddingVertical: 16,

        //IOS shadow
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
        shadowColor: colors.black,

        //Android shadow
        elevation: 5,
    },
    titleContainer: {
        paddingLeft: 25,
        paddingRight: 15
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.0124,
        color: colors.white
    },
    imageContainer: {
        marginTop: 15
    },
    contentContainer: {
        paddingLeft: 24,
        paddingTop: 15,
        paddingRight: 19,
        paddingBottom: 14
    },
    yearText: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.0124,
        color: colors.primary
    },
    subTitleText: {
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.0124,
        color: colors.textGray
    },
    synopsisContainer: {
        marginTop: 30
    },
    synopsisTitleText: {
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: -0.0124,
        color: colors.white
    },
    synopsisBodyContainer: {
        marginTop: 8,
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 20,
        paddingTop: 13,
        paddingRight: 18,
        paddingBottom: 7,
        paddingLeft: 19,
    },
    synopsisBodyText: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
        letterSpacing: -0.0124,
        color: colors.textGray
    }
});

export const reviewInputCardCss = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumGray,
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 18,

        //IOS shadow
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
        shadowColor: colors.black,

        //Android shadow
        elevation: 5,
    },
    inputReview: {
        paddingHorizontal: 10,
        minHeight: 97,
        maxHeight: 400,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
    },
    btnSaveContainer: {
        marginTop: 13,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSaveText: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.0124,
        color: colors.black
    }
});

export const reviewsListCardCss = StyleSheet.create({

    container: {
        backgroundColor: colors.mediumGray,
        borderRadius: 20,
        paddingTop: 11,
        paddingRight: 18,
        paddingBottom: 18,
        paddingLeft: 21,
        marginTop: 18,

        //IOS shadow
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,
        shadowColor: colors.black,

        //Android shadow
        elevation: 5,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: -0.0124,
        color: colors.white
    },
    reviewContainer: {
        marginTop: 20
    },
    authorContainer: {
        flexDirection: 'row',
        paddingLeft: 19,
        alignItems: 'center'
    },
    authorText: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.0124,
        color: colors.white
    },
    reviewContentContainer: {
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 19,
        marginTop: 10
    },
    reviewContentText: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
        letterSpacing: -0.0124,
        color: colors.textGray
    }

});