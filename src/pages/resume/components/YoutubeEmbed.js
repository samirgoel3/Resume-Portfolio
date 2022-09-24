import React from "react";
import PropTypes from "prop-types";
import { isMobile } from 'react-device-detect';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width={isMobile ? 130:300}
      height={isMobile ? 100:170}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;