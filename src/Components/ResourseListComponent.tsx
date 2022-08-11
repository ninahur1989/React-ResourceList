import ResourseListModel from "../Models/ResourseListModel";
import GetResourceList from "../Http/GetResourseListRequest";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";

const ResponseListComponent = (): JSX.Element => {
  const [newRespourseList, setResourseList] = useState<ResourseListModel>();
  useEffect(() => {
    async function init() {
      const result = await GetResourceList();
      setResourseList(result);
    }

    init();
  }, []);

  return (
    <Card >
      <h1 >
        <b>Resourse list</b>
      </h1>
      <div>
        Page: {newRespourseList?.page}
        {newRespourseList?.data &&
          newRespourseList.data.map((res, index) => (
            <div key={index}>
              Id: {res.id} Name: {res.name}, Color: {res.color} 
            </div>
          ))}
      </div>
    </Card>
  );
};

export default ResponseListComponent;
