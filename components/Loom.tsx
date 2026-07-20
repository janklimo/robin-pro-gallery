import React from "react";

type LoomProps = {
  // The id from a Loom share URL, e.g. loom.com/share/<id> or loom.com/embed/<id>
  id: string;
};

const Loom = ({ id }: LoomProps): JSX.Element => {
  return (
    <div className="relative h-0 pb-[56.25%]">
      <iframe
        src={`https://www.loom.com/embed/${id}`}
        allowFullScreen
        className="absolute left-0 top-0 h-full w-full rounded-lg"
      />
    </div>
  );
};

export default Loom;
