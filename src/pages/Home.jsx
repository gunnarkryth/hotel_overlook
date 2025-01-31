export const Home = () => {
  const { data: news } = useFetch("/api/news?limit=3");
  const { data: rooms } = useFetch("/api/rooms?random=3");

  return (
    <div>
      <Slideshow />

      {/* Latest News Section */}
      <section className="section">
        <h2 className="section-title">Seneste nyt</h2>
        <div className="news-grid">
          {news?.map((item) => (
            <article key={item.id} className="news-card">
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href={`/nyheder/${item.slug}`}>Læs mere</a>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section">
        <h2 className="section-title">Værelser</h2>
        <div className="rooms-grid">
          {rooms?.map((room) => (
            <div key={room.id} className="room-card">
              <h3>{room.type}</h3>
              <p>Fra {room.price} DKK</p>
              <a href={`/vaerelser#${room.slug}`}>Se detaljer</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
