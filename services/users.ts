import { post,postJson } from "@api/index.js";

export const login = (params: any) => post("/users/login", params);