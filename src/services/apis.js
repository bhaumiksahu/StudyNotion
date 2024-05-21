const  BASE_URL=process.env.REACT_APP_BASE_URL

export const categories={
    CATEGORIES_API:BASE_URL + "/course/showAllCategories"
}

// auth endpoint
export const endPoint={
    SIGNUP_API:BASE_URL+"/auth/signup",
    SENDOTP_API:BASE_URL+"/auth/sendotp",
    RESETPASSWORD_API:BASE_URL+"/auth/reset-password",
    RESETPASSWORDTOKEN_API:BASE_URL+"/auth/reset-password-token",
}