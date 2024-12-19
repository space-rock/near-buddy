import { connect } from "near-api-js";

export const near = await connect({
  nodeUrl: "https://rpc.mainnet.near.org",
  networkId: "mainnet",
});

export const getAccount = async (account: string) => {
  return near.connection.provider.query({
    request_type: "view_account",
    finality: "final",
    account_id: account,
  });
};
