

const Logout = () => {
    sessionStorage.removeItem("token");
    console.log("Logged Out")
    // setAuthenticated(false)
};

export default Logout;