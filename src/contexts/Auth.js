import React, { createContext } from "react"

export const AuthContext = createContext({ userItem: {}, setUserItem: value => { } })