import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Ví dụ với Google OAuth2
// Thêm các provider khác nếu cần

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
    // Thêm các nhà cung cấp OAuth2 khác như GitHub, Facebook nếu cần
  ],
  pages: {
    signIn: '/login',  // Trang đăng nhập
  },
  // Tùy chọn các callback để xử lý token hoặc session
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user=token;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
