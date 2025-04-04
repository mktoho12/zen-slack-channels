// env.d.ts
namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string

    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string

    ALLOW_DOMAIN: string
  }
}
