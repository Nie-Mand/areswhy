const Cards = ({ data, light = false }) => {
  return (
    <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-10">
      {data.map(({ title, intro, color, bg, tag }, i) => (
        <div
          title={title}
          key={i}
          className={`items-start justify-center cursor-pointer p-4 gap-y-2 rounded-lg duration-200 ${
            light ? bg : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'
          } `}
        >
          <h1
            className={`pb-3 flex items-center justify-between font-bold text-xl md:text-2xl ${
              light ? 'text-white' : color
            }`}
          >
            {title}
            {tag && (
              <span className="inline-block bg-white rounded-full px-2 py-1 text-[10px] leading-3 font-semibold text-gray-700 mr-2">
                {tag}
              </span>
            )}
          </h1>
          <p className="font-light text-xs md:text-sm capitalize">{intro}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
