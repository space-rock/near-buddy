"use client";

import { useDebounceEffect } from "ahooks";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

import SearchIcon from "@/components/icons/Search";
import { getAccount } from "@/libs/near";
import { Account } from "@/types";

type Props = {
  onSelect: Dispatch<SetStateAction<Account | null>>;
};

const SearchBox = ({ onSelect }: Props) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<Account | null>(null);

  useDebounceEffect(
    () => {
      onQuery(query);
    },
    [query],
    { wait: 500 },
  );

  const onQuery = async (q: string) => {
    try {
      setLoading(true);

      if (q) {
        const account = await getAccount(q);

        if (account) {
          return setAccount({
            account_id: q,
            ...account,
          } as unknown as Account);
        }
      }

      setAccount(null);
    } catch {
      //
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="peer h-14 lg:h-16 bg-white/10 rounded-full has-[:focus]:bg-white/15 has-[:focus]:outline has-[:focus]:outline-offset-4 outline-violet-500 relative">
        <div className="flex">
          <input
            autoCapitalize="false"
            placeholder="Search for account..."
            className="h-14 lg:h-16 bg-transparent text-white w-full px-6 outline-none focus:ring-0"
            value={query}
            onChange={onChange}
          />
          <button
            type="submit"
            className="h-14 lg:h-16 flex items-center bg-white/5 text-white uppercase rounded-r-full px-4 md:px-6 outline-none focus:ring-0"
            disabled={loading}
          >
            <SearchIcon
              className={`h-5 w-5 sm:h-4 sm:w-4 text-white mr-2 duration-700 ${loading && "animate-ping"}`}
            />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>
      {account && (
        <div className="absolute invisible peer-has-[:focus]:visible has-[:focus]:visible has-[:hover]:visible w-full rounded-full text-base mt-2 shadow-lg">
          <button
            key={account.account_id}
            onClick={() => onSelect(account)}
            className="bg-white/10 w-full rounded-full text-left text-white focus:ring-0 focus:outline-2 focus:outline-offset-4 focus:outline-violet-500 px-6 py-3 focus:bg-white/15 hover:bg-white/15"
          >
            {account.account_id}
          </button>
        </div>
      )}
    </form>
  );
};

export default SearchBox;
