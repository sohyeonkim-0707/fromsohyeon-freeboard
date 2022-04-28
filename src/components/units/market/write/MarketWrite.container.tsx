import { useForm } from "react-hook-form";
import { schema } from "./MarketWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queris";
import ProductWriteUI from "./MarketWrite.presenter";
import { IMarketWriteProps } from "./MarketWrite.types";
import { useEffect, useState } from "react";
// import { useState } from "react";
// import { Modal } from "antd";

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();
  const [myLat, setMyLat] = useState(""); // 위도
  const [myLng, setMyLng] = useState(""); // 경도
  const [fileUrls, setFileUrls] = useState(["", "", ""]); // 사진

  const {
    handleSubmit,
    register,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  // 📌 웹 에디터 react-quill
  const onChangeContents = (value: any) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // 📌  상품 등록하기 mutation
  const onClickUploadProduct = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: fileUrls,
            // useditemAddress: {
            //   lat: myLat,
            //   lng: myLng,
            // },
          },
        },
      });
      console.log("등록", data); // test
      alert("상품을 등록합니다.");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
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
  // 📌 이미지 업로드
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);
  // 지도

  return (
    <ProductWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      getValues={getValues}
      reset={reset}
      isActive={formState.isValid}
      isEdit={props.isEdit}
      data={props.data}
      fileUrls={fileUrls}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      onClickUploadProduct={onClickUploadProduct}
      onClcikEditProduct={onClcikEditProduct}
    />
  );
}
