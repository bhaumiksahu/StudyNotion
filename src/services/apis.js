const  BASE_URL=process.env.REACT_APP_BASE_URL

export const categories={
    CATEGORIES_API:BASE_URL + "/course/showAllCategories"
}

// auth endpoint
export const endPoint={
    RESETPASSWORD_API:BASE_URL+"/auth/reset-password",
    RESETPASSWORDTOKEN_API:BASE_URL+"/auth/reset-password-token",
}