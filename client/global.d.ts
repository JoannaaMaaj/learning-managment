declare module "*.css";

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_BASE_URL: string;
    readonly NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    readonly CLERK_SECRET_KEY: string;
    readonly NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    readonly NEXT_PUBLIC_STRIPE_REDIRECT_KEY: string;
  }
}