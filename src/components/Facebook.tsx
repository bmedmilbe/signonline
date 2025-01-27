import React from "react";

const Facebook = () => {
  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://signonline.vercel.app`;
    window.open(shareUrl, "_blank", "width=575,height=400");
  };

  return (
    <div className="text-end">
      {/* ... other content ... */}
      <button className="btn btn-primary" onClick={shareOnFacebook}>
        Partilhar no Facebook
      </button>
      {/* ... other content ... */}
    </div>
  );
};

export default Facebook;
