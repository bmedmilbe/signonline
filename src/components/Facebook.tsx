const Facebook = () => {
  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://signonline.vercel.app`;
    window.open(shareUrl, "_blank", "width=575,height=400");
  };

  return (
    <div className="text-end">
      {/* ... other content ... */}
      <span className="btn btn-primary" onClick={shareOnFacebook}>
        Partilhar no Facebook
      </span>
      {/* ... other content ... */}
    </div>
  );
};

export default Facebook;
