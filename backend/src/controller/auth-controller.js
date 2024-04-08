export function signup(req, res) {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body
    } catch (error) {
        console.error(error)
    }
}

export function login(req, res) {
    try {
        console.log("Login")
    } catch (error) {
        console.error(error)
    }
}

export function logout(req, res) {
    try {
        console.log("Logout")
    } catch (error) {
        console.error(error)
    }
}
