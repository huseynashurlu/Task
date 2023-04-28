import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../utils/api";
import { User } from "../types";
import { Spin, Alert } from "antd";

type Props = {};

type RouteParams = {
  username: string;
};

const UserProfile: React.FC<Props> = () => {
  const { username } = useParams<RouteParams>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getUserProfile(username)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  return (
    <>
      {loading && <Spin />}
      {error && <Alert message={error} type="error" />}
      {user && (
        <>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </>
      )}
    </>
  );
};

export default UserProfile;