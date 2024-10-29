const images = [
  {
    url: 'https://i.postimg.cc/VL0hLGTq/Screenshot-from-2024-10-29-12-14-35.png',
    title: 'Innovation Assistant',
    description: 'Make new, from scratch',
  },
  {
    url: 'https://i.postimg.cc/Dy65v0Zd/Screenshot-from-2024-10-29-01-48-48.png',
    title: 'Research Analysis',
    description: 'Deep analysis of technical papers',
  },
  {
    url: 'https://i.postimg.cc/prTrKsfd/Screenshot-from-2024-10-29-01-45-29.png',
    title: 'Visualise Innovation',
    description:
      'Bring your ideas into view with our world-class image generator',
  },
  {
    url: 'https://i.postimg.cc/dQgpGjmq/Screenshot-from-2024-10-29-11-57-14.png',
    title: 'Multi-Role Player',
    description: 'Advance in multiple fields through multiple means',
  },
];

export function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#ffff] via-red-900 to-[#EAA17F] bg-clip-text text-transparent">
          Revolutionize Your Research
        </h2>
        <p className="text-red-100/80 text-lg">
          Transform complex research into actionable engineering insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl glass-card"
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 glass-effect bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {image.title}
              </h3>
              <p className="text-red-200">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
