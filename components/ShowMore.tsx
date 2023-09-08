"use client";
import { updateSearchParams, updateSearchParam } from "@/utils";
import Button from "./Button";
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { ShowMoreComponent } from "@/types";
const ShowMore = ({pageNumber,loadMore}: ShowMoreComponent) => {
  let router = useRouter();
  let searchParams = useSearchParams();
  const [loader, setLoader] = useState(false);
  
  useEffect(() => {
    setLoader(false);
  }, [searchParams]);
  
  const handlePagination = () => {
    setLoader(true);
    const url = updateSearchParam("limit", `${(pageNumber + 1) * 10}`);
    router.push(url, {scroll: false});
    
  };
  return (
    <div className="flex-center flex-col mt-10">
      {loader && (
        <div className="z-20 flex-center bg-white">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {loadMore && (
        <div className="flex-center mt-10">
          <Button
            title="Show More"
            textStyles="text-white"
            type="button"
            clickHandle={handlePagination}
            containerStyles="py-[16px] rounded-full bg-primary-blue"
          />
        </div>
      )}
    </div>
  );
};

export default ShowMore;
