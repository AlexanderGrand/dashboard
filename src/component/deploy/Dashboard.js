import React, { useState, useEffect } from "react";
import { BarColumns, Pie, GroupBar } from "../sources/";

const Static = (props) => {
  const type = props.type;
  const { data, title } = props.data;
  const [graph, setGraph] = useState({ type: "", data: "", title: "" });

  useEffect(() => {
    //bar graph
    setGraph({ type: type, data: data, title: title });
  }, [type, data, title]);

  return (
    <>
      {graph.type == "simpleBar" && <BarColumns source={graph} />}
      {graph.type == "pie" && <Pie source={graph} />}
      {graph.type == "groupBar" && <GroupBar source={graph} />}
    </>
  );
};

export default Static;
