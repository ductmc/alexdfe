import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login', // Chuyển hướng đến trang login nếu người dùng chưa
  }
});