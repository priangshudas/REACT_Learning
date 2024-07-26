const Card = ({
  productName = "OSname",
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzxZ06cYMu0tEnba6Cr_fdiazWr_2xjsNnQ&s",
}) => {
  return (
    <>
      <div className="w-[300px] rounded-md border">
        <img
          src={imgSrc}
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{productName}</h1>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
