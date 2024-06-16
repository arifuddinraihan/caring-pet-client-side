import Link from "next/link";
import HomePagePetCard from "./HomePagePetCard";

const HomePagePets = async () => {
  const demoPets = await fetch(`${process.env.LOCAL_URL}/pets/new-pets`);

  const { data: demoPetsData } = await demoPets.json();

  //   console.log(demoPetsData);

  return (
    <section className="py-28">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 text-center">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Check out our latest pets listing
          </h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoPetsData.map((pet: any) => (
              <HomePagePetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/pets"
            className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePagePets;
