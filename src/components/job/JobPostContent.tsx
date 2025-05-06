import React from "react";
import { marked } from "marked";
const JobPostContent = ({ content }: { content: string }) => {
  const html = marked(content);

  return (
    <div className="job my-12 lg:my-16">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default JobPostContent;
