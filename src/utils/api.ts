const BASE_URL = "https://api.github.com";

export const getRepoIssues = async (repoUrl: string) => {
  const [owner, repo] = repoUrl.split("/").slice(-2);
  const url = `${BASE_URL}/repos/${owner}/${repo}/issues`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch issues");
  }
  const data = await response.json();
  return data;
};

export const getUserProfile = async (username: string) => {
  const url = `${BASE_URL}/users/${username}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }
  const data = await response.json();
  return data;
};