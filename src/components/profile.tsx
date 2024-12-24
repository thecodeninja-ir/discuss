"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const session = useSession();
  if (session.data?.user) {
    return <div>Authorized!</div>;
  }
  return <div>Unauthorized!</div>;
};

export default Profile;
