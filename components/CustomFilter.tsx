"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { customFilterType } from "@/types";
import { updateSearchParams, updateSearchParam } from "@/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CustomFilter({ title, options }: customFilterType) {
  const [choosen, setChoosen] = useState(options[0]);
  const router = useRouter();

  const handleUpdateSearchParams = (key: string, value:string) => {
    if(value.toLowerCase() == options[0].title.toLowerCase() || !value) return;
    const newURL = updateSearchParam(key.toLowerCase(), value.toLowerCase());
    router.push(newURL,{ scroll: false});
  };

  return (
    <div className=" w-fit">
      <Listbox
        value={choosen}
        onChange={(e) => {setChoosen(e); handleUpdateSearchParams(title, e.title);}}
      >
        <div className="'relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{choosen.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="chevron_up-down"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIndex) => (
                <Listbox.Option
                  key={optionIndex}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
