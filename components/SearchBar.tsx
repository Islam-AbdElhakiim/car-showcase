"use client";

import { useState } from "react";
import AutoCompleteInput from "./AutoCompleteInput";
import { manufacturers as makers } from "@/constants";
import Image from "next/image";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

/* tightly coupled Reusability Btn */
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [maker, setMaker] = useState("");
  const [model, setModel] = useState("");
  const [modelsList, setModelsList] = useState(['']);
  const [formError, setFormError] = useState(false);
  const router = useRouter();
  
  const changeMaker = (maker: string) => {
    setMaker(maker);
    setModel("");
    setModelsList(makers[maker]);
    setFormError(false)
  };
  
  const submitForm = (e:any) => {
    e.preventDefault();
    if(maker == '' || !maker) {
        return setFormError(true);
    }
    
    // const newURL = updateSearchParams('manufacturer', maker.toLowerCase());
    const newURL = updateSearchParams(['manufacturer', 'model'], [maker.toLowerCase(), model.toLowerCase()]);
    // console.log(key, "key");
    // console.log(value, "value");
    router.push(newURL, { scroll: false });

  }
  return (
    <form className={`searchbar relative `} onSubmit={(e) => submitForm(e)}>
        <p className={`absolute -top-6 text-red-500 ${formError ? 'visible' : 'hidden'}`}>please select a car maker...</p>
      <div className={`searchbar__item ${formError ? 'border border-red-500' : ''}`}>
        <AutoCompleteInput
          list={Object.keys(makers)}
          filter={maker}
          setFilter={changeMaker}
          placeHolder="Mercedes-Benz..."
          border="left"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className={`searchbar__item `}>
        <AutoCompleteInput
          list={modelsList}
          filter={model}
          setFilter={setModel}
          placeHolder="Choose Car Model"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden -ml-4" />
    </form>
  );
};

export default SearchBar;
