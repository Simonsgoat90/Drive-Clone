import NextAuth from "next-auth";

import { authOptions } from "pepito/server/auth";

export default NextAuth(authOptions);
