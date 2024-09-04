import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

import { createGlideConfig, chains } from "@paywithglide/glide-js";
import uniFarcasterSdk from "uni-farcaster-sdk";

export const glideConfig = createGlideConfig({
  projectId: process.env.GLIDE_PROJECT_ID ?? "",

  chains: [chains.arbitrum, chains.optimism, chains.base],
});

const neynarApiKey = process.env.NEYNAR_API_KEY;

//If you already have a custom neynar api key, you can use it here else it will still work
export const sdkInstance = new uniFarcasterSdk({
  ...(neynarApiKey && { neynarApiKey: neynarApiKey }),
  //I notice you have cache and it does not invalidate so you can set it to a very high number
  cacheTtl: Number.MAX_SAFE_INTEGER,
  //I notice you have retries also
  retries: 5,
  //Enable debug mode in developement
  debug: process.env.NODE_ENV === "development",
});
