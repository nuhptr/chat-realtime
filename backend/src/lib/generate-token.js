import jwt from "jsonwebtoken"

export function generateTokenAndSetCookie(userId, res) {
   const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" })

   res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      httpOnly: true, // Prevent XSS cookie access from client side JavaScript
      sameSite: "strict", // CSRF protection
      secure: process.env.NODE_ENV !== "development", // HTTPS only in production
   })
}
