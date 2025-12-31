const AnnouncementBar = () => {
  const message = "FREE SHIPPING ON ORDERS OVER $50 • NEW ARRIVALS NOW AVAILABLE • ";
  
  return (
    <div className="bg-foreground text-background py-2.5 overflow-hidden">
      <div className="announcement-scroll whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-body text-xs tracking-[0.2em] uppercase mx-4">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
