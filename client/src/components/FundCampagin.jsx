import React from "react";
import { useForm } from "react-hook-form";
import { toastError, toastSuccess } from "../utils/toastWrapper";
import logic from "../interface/logic";
export default function FundCampaign({ wallet }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await logic.FundCampaign(wallet, data.campaignId, data.amount);
      toastSuccess(`Successfully Donated ${data.amount} Teas`);
    } catch (error) {
      toastError(`Please Connect Wallet`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register("campaignId")} />

        <input {...register("amount", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
