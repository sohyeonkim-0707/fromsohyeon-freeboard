import { useForm } from "react-hook-form";
import { schema } from "./MarketWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queris";
import ProductWriteUI from "./MarketWrite.presenter";
import { IMarketWriteProps } from "./MarketWrite.types";
import { useEffect, useState } from "react";
// import { useState } from "react";
import { Modal } from "antd";
import { FETCH_USED_ITEMS } from "../list/MarketList.queries";

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  // 지도
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  // 모달 주소입력
  const [isOpen, setIsOpen] = useState(false);
  // 사진
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // 해시태그
  const [hashArr, setHashArr] = useState([]);
  // 폼
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

  // const { data: itemData } = useQuery(FETCH_USED_ITEMS, {
  //   variables: {
  //     useditemId: String(router.query.productId),
  //   },
  // });

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
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
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

  // 📌  상품 수정하기
  const onClcikEditProduct = async (data: any) => {
    console.log("수정", data); // test
    // 이미지수정
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data?.fetchUseditem?.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !isChangedFiles
    ) {
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
    }
    // 변경된 값만 넣어주기 위한 빈객체 {}
    const updateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    if (hashArr) updateUseditemInput.tags = hashArr;
    // 주소
    if (zipcode || address || addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (zipcode) updateUseditemInput.useditemAddress.zipcode = zipcode;
      if (address) updateUseditemInput.useditemAddress.address = address;
      if (addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            images: fileUrls,
            tags: hashArr,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
          useditemId: router.query.productId,
          // updateUseditemInput,
        },
      });

      alert("상품을 수정합니다.");
      router.push(`/market/${router.query.productId}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   setValue(
  //     "useditemAddress.addressDetail",
  //     itemData?.fetchUseditem?.useditemAddress?.addressDetail
  //   );
  //   setAddress(itemData?.fetchUseditem?.useditemAddress?.address);
  //   setZipcode(itemData?.fetchUseditem?.useditemAddress?.zipcode);
  // }, [itemData]);

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

  // 📌 해시태그
  const onKeyUpHashTag = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  // 📌 주소 모달
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleComplete = (data: any) => {
    setIsOpen(false);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  // const onClickCancle = () => {
  //   router.back();
  // };

  return (
    <ProductWriteUI
      // 지도
      onChangeAddressDetail={onChangeAddressDetail}
      address={address}
      zipcode={zipcode}
      handleSubmit={handleSubmit}
      // 주소모달
      isOpen={isOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      // 폼
      register={register}
      formState={formState}
      getValues={getValues}
      reset={reset}
      isActive={formState.isValid}
      isEdit={props.isEdit}
      data={props.data}
      // 이미지
      fileUrls={fileUrls}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      onClickUploadProduct={onClickUploadProduct}
      onClcikEditProduct={onClcikEditProduct}
      // 해시태그
      hashArr={hashArr}
      onKeyUpHashTag={onKeyUpHashTag}
    />
  );
}
