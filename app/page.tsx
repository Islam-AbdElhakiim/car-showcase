import { CustomFilter, SearchBar } from "@/components";
import { Hero } from "../sections";
import { fetchCars } from "../utils";
import CarCard from "@/components/CarCard";
import { CarCardProps, HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams}: HomeProps) {
  const {fuel, year, manufacturer, model, limit} = searchParams
  let allCars = await fetchCars({fuel, year, manufacturer, model, limit});
  let isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className={`overflow-hidden min-h-screen`}>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          {/* Displaying Cars */}
          {!isEmpty ? (
            <section id="explore">
              <div className="home__cars-wrapper">
                {allCars?.map((car:CarCardProps, index:number) => (
                  <CarCard key={index} {...car} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, the integrated API can't provide data for this car data...</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
        <ShowMore pageNumber={(limit || 10) / 10} loadMore={(limit || 10) <= allCars.length}/>
      </div>
    </main>
  );
}
