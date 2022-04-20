import { useForm } from "react-hook-form";
import { schema } from "./MarketWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./MarketWrite.queris";
import ProductWriteUI from "./MarketWrite.presenter";
import { IMarketWriteProps } from "./MarketWrite.types";
// import { useState } from "react";
// import { Modal } from "antd";

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  // 상품 등록하기
  const onClickUploadProduct = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data },
        },
      });
      console.log(data);
      alert("상품을 등록합니다.");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  // 상품 수정하기
  const onClcikEditProduct = async (data) => {
    console.log("수정", data);
  };

  return (
    <ProductWriteUI
      handleSubmit={handleSubmit}
      onClickUploadProduct={onClickUploadProduct}
      onClcikEditProduct={onClcikEditProduct}
      register={register}
      formState={formState}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
