/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import PropTypes from '../../node_modules/prop-types';

import './VideoListItem.css';

const VideoListItem = ({ video, onVideoSelect }) =>
  (
    <li className="VideoListItem" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="video-info">
        <h3 className="title">{video.snippet.title}</h3>
        <p className="channel">{video.snippet.channelTitle}</p>
      </div>
    </li>
  );

VideoListItem.propTypes = {
  video: PropTypes.objectOf(PropTypes.any).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoListItem;
