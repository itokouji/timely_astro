import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const base = process.env.BASE_PATH ?? (isGitHubActions && repositoryName ? `/${repositoryName}` : "/");
const site = process.env.SITE_URL ?? (
  isGitHubActions && repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io${base}`
    : "https://www.timelybad.mydns.jp/"
);

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});