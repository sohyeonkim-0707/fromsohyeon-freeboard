import { useForm } from "react-hook-form";
import { schema } from "./MarketWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queris";
import ProductWriteUI from "./MarketWrite.presenter";
import { IMarketWriteProps } from "./MarketWrite.types";
// import { useState } from "react";
// import { Modal } from "antd";

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  // 📌 웹 에디터 onChange
  const onChangeContents = (value: any) => {
    console.log(value);
    // 지금 입력한 value 가 <p><br></p> 이 값이면 강제로 "" 빈값으로 만들어주기

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    // constents라는 해당 키에 value를 강제로 넣어줘
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange 됐다고 react-hook-form 에 알려주는 기능
    trigger("contents");
  };

  // 📌  상품 등록하기 mutation
  const onClickUploadProduct = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data },
        },
      });
      console.log("등록", data); // test
      alert("상품을 등록합니다.");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // 📌  상품 수정하기 mutation
  const onClcikEditProduct = async (data: any) => {
    console.log("수정", data); // test
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: { ...data },
          useditemId: router.query.productId,
        },
      });

      alert("상품을 수정합니다.");
      router.push(`/market/${router.query.productId}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ProductWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      isActive={formState.isValid}
      isEdit={props.isEdit}
      data={props.data}
      onChangeContents={onChangeContents}
      onClickUploadProduct={onClickUploadProduct}
      onClcikEditProduct={onClcikEditProduct}
    />
  );
}
