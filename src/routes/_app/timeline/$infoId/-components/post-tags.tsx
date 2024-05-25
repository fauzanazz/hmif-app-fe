import React, { useState } from 'react';
import { IPost } from '../-interface/IPost';
import Tag from './tag';
import { Button } from '~/components/ui/button';

const PostTags = ({ tags }: { tags: IPost['TagData'] }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-start gap-2.5">
      {(showAll ? tags : tags.slice(0, 6)).map((tagData, index) => (
        <Tag key={index} tag={tagData} />
      ))}
      {tags.length > 6 && (
        <Button
          variant={'link'}
          className="p-0 text-base font-semibold text-green-300"
          onClick={showAll ? handleShowLess : handleShowMore}
        >
          <p>{showAll ? 'Show less' : 'Show more'}</p>
        </Button>
      )}
    </div>
  );
};

export default PostTags;
