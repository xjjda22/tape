import MetaTags from "@components/common/MetaTags";
import Layout from "@components/wrappers/Layout";
import useAppStore from "@lib/store";
import dynamic from "next/dynamic";
import React from "react";
import Custom404 from "src/pages/404";

import AboutChannel from "./AboutChannel";
import SuggestedVideos from "./SuggestedVideos";
import VideoComments from "./VideoComments";

const Video = dynamic(() => import("./Video"));

const VideoDetails = () => {
  const { selectedChannel } = useAppStore();

  if (!selectedChannel) {
    return <Custom404 />;
  }

  return (
    <Layout>
      <MetaTags title="Video Details" />
      <div className="grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-4">
        <div className="col-span-3">
          <Video />
          <AboutChannel channel={selectedChannel} />
          <VideoComments />
        </div>
        <div className="col-span-1">
          <SuggestedVideos />
        </div>
      </div>
    </Layout>
  );
};

export default VideoDetails;
