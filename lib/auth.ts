import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"
import { connectDB } from "./mongodb"
import { User } from "./models"

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-key-change-in-production"

export async function getAuthUser(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value

    if (!token) {
      return null
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }

    await connectDB()

    const user = await User.findById(decoded.userId).select("-password")
    return user
  } catch (error) {
    console.error("Auth error:", error)
    return null
  }
}