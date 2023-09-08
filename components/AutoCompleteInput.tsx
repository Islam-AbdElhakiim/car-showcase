"use client";

import { ComboFilters } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

const AutoCompleteInput = ({
  list,
  filter,
  setFilter,
  placeHolder,
  border,
}: ComboFilters) => {
  const [query, setQuery] = useState("");
  const filteredMakers =
    query === ""
      ? list
      : list.filter((maker: string) =>
          maker
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toString().toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={filter} onChange={setFilter}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className={`search-manufacturer__input ${
              border === "left" ? "rounded-l-full" : "rounded-r-full"
            }`}
            placeholder={placeHolder}
            displayValue={(make: string) => make}
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input>
          <Transition
            leave=" transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {list && list.length > 1 && <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 z-20 focus:outline-none sm:text-sm"
              static
            >
              {filteredMakers.length === 0 && query != "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create&quot;{query}&quot;
                </Combobox.Option>
              ) : (
                filteredMakers.map((maker) => (
                  <Combobox.Option
                    key={maker}
                    value={maker}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {maker}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options> }
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default AutoCompleteInput;
