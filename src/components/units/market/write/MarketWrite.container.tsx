import { useForm } from "react-hook-form";
import { schema } from "./MarketWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./MarketWrite.queris";
import ProductWriteUI from "./MarketWrite.presenter";

export default function MarketWrite() {
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  async function onClickUploadProduct(data: any) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data },
        },
      });
      console.log(data);
      alert("상품을 등록합니다~");
      router.push(`/market/market-detail/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <ProductWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickUploadProduct={onClickUploadProduct}
    />
  );
}
