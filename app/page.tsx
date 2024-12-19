"use client";

import Link from "next/link";
import { useState } from "react";

import AccountBox from "@/components/AccountBox";
import Logo from "@/components/icons/Logo";
import SearchBox from "@/components/SearchBox";
import { Account } from "@/types";

const Home = () => {
  const [account, setAccount] = useState<Account | null>(null);

  return (
    <>
      <header className="xl:container h-20 flex items-center justify-center px-4 py-5">
        <Link
          href="/"
          className="p-2 rounded-full focus:outline focus:ring-violet-500 focus:outline-offset-4"
        >
          <Logo className="h-7 w-7 text-white" />
        </Link>
      </header>
      <main className="xl:container flex flex-col justify-center flex-grow px-4">
        <div className="w-full max-w-2xl mx-auto pb-20">
          {account ? (
            <AccountBox account={account} onClose={setAccount} />
          ) : (
            <SearchBox onSelect={setAccount} />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
