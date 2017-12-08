export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
