export type User = {
    login: string;
    name: string;
    avatar_url: string;
  };
  
  export type Issue = {
    id: number;
    title: string;
    body: string;
    state: "open" | "closed";
    created_at: string;
    updated_at: string;
    closed_at?: string;
    assignee?: User;
  };
  
  export type Column = {
    id: string;
    title: string;
    issueIds: number[];
  };
  
  export type Board = {
    [key: string]: Column;
  };