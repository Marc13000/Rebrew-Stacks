"use client";

import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

export default function Navbar({ userSession, userData, setUserData }) {
  return (
    <nav>
      {userData ? (
        <ConnectWallet
          userSession={userSession}
          userData={userData}
          setUserData={setUserData}
        />
      ) : (
        ""
      )}
    </nav>
  );
}
