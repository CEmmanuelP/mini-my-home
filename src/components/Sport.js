import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetailDataAction } from "../store/redux";

const Sport = () => {
  const id = document.location.href.split("/").reverse()[0];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    // // action;
    //   dispatch(
    //     getDetailDataAction({
    //       id:
    //     })
    //   );
  }, []);

  return <div>Sport</div>;
};

export default Sport;
