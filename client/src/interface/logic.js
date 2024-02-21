import { VoyageProvider, Wallet, getLogicDriver } from "js-moi-sdk";

const provider = new VoyageProvider("babylon");
// export const logicId = process.env.REACT_APP_LOGIC_ID;
export const logicId =
  "0x0800003228360f426c0c30a2135e79e01b322827b6acde62bbedbb2298c11712c48524";

const constructBaseWallet = async () => {
  const wallet = new Wallet(provider);
  await wallet.fromMnemonic(
    // process.env.REACT_APP_BASE_MNEMONIC
    "crop general media metal cancel pottery slogan punch hungry mercy left knee",
    "m/44'/6174'/7020'/0/0"
  );
  return wallet;
};

// Base wallet should only be used for making read calls when user has not connected his wallet
const baseWallet = await constructBaseWallet();

//================= Crowdfunding Platform Endpoints and Functions ====================//

////////////////////////
// Mutate/Write Calls
///////////////////////

// ixResponse.result() is used for endpoints that return an output
// ixResponse.wait() is used for endpoints that don't return anything and we
// just want to wait for the interaction to be settled

const CreateCampaign = async (
  wallet,
  name,
  description,
  targetAmount,
  endTime
) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.CreateCampaign(
    name,
    description,
    targetAmount,
    endTime
  );
  return ixResponse.result();
};

const FundCampaign = async (wallet, campaignId, amount) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.FundCampaign(
    campaignId,
    amount
  );
  return ixResponse.wait();
};

const FinalizeCampaign = async (wallet, campaignId) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.FinalizeCampaign(campaignId);
  return ixResponse.wait();
};

const ClaimRefund = async (wallet, campaignId) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.ClaimRefund(campaignId);
  return ixResponse.wait();
};

////////////////////////
// Observe/Read Calls
///////////////////////

const GetCampaigns = async () => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.GetCampaigns();
};

//========================== Token Endpoints and Functions ====================//

////////////////////////
// Mutate/Write Calls
///////////////////////

const ClaimToken = async (wallet) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.Claim();
  return ixResponse.wait();
};

////////////////////////
// Observe/Read Calls
///////////////////////

const GetTokenName = async () => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.Name();
};
const GetTokenBalanceOf = async (account) => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.BalanceOf(account);
};
const GetTokenClaimAmount = async () => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.ClaimAmount();
};

// returns a unix timestamp in seconds
const GetNextClaim = async (account) => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.NextClaim(account);
};
const GetTokenDecimals = async () => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.Decimals();
};

// get the decimal value / precision of the token
const GetTokenSymbol = async () => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.Symbol();
};

let logic = {
  GetTokenName,
  GetTokenBalanceOf,
  GetNextClaim,
  GetTokenClaimAmount,
  GetTokenDecimals,
  GetTokenSymbol,
  ClaimToken,
  CreateCampaign,
  FundCampaign,
  FinalizeCampaign,
  ClaimRefund,
  GetCampaigns,
};

export default logic;
