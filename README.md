This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Kỹ thuật

Login with Google

Tạo 1 Web Application Google Client => nhận được Client_Id 

Front-end:
- use package react-google-login truyền Client_Id vừa rồi
- có thể login bằng Google và nhận thông tin nick google đó (id_token, email, ...)
- gửi id_token xuống cho back-end để nó check
- nhận access token, save lại 

Back-end:
- use package google-auth-library truyền Client_Id
- dùng hàm để xác thực id_token
- check tồn tại để tạo tài khoản mới
- trả về access token
