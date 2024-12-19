import { utils } from "near-api-js";
import { Dispatch, SetStateAction } from "react";

import { Account } from "@/types";

import Close from "./icons/Close";

type Props = {
  account: Account;
  onClose: Dispatch<SetStateAction<Account | null>>;
};

const AccountBox = ({ account, onClose }: Props) => {
  return (
    <div className="relative bg-white/10 w-full max-w-2xl rounded-xl mx-auto p-6">
      <button
        onClick={() => onClose(null)}
        className="absolute top-2 right-2 bg-white/10 p-1 rounded-full ring-0 focus:outline focus:ring-violet-500 focus:outline-offset-4"
      >
        <Close className="h-5 w-5 text-white" />
      </button>
      <div className="text-white text-2xl font-bold truncate mb-2">
        {account.account_id}
      </div>
      <div className="text-white text-2xl font-bold truncate mb-5">
        {utils.format.formatNearAmount(account.amount, 2)} NEAR
      </div>
      <div className="sm:flex">
        <div className="sm:w-1/2 mb-5">
          <div className="text-white/40 text-md">Locked Amount</div>
          <div className="text-white text-md font-bold truncate">
            {utils.format.formatNearAmount(account.locked, 2)} NEAR
          </div>
        </div>
        <div className="sm:w-1/2 mb-5">
          <div className="text-white/40 text-md">Storage Usage</div>
          <div className="text-white text-md font-bold truncate">
            {account.storage_usage} B
          </div>
        </div>
      </div>
      <div className="text-white/40 text-md">Code Hash</div>
      <div className="text-white text-md font-bold truncate">
        {account.code_hash}
      </div>
    </div>
  );
};

export default AccountBox;
