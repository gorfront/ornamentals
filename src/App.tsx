import { Routes, Route } from "react-router-dom";
import HomeWrapper from "./wrapper/HomeWrapper";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import CurrentItem from "./components/CurrentItem/CurrentItem";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { selectMain } from "./store/slices/mainSlice/mainSlice";
import { fetchMain } from "./store/slices/mainSlice/mainSliceAPI";

const App: React.FC = () => {
  const [searchWord, setSearchWord] = useState("");
  const main = useAppSelector(selectMain);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMain());
  }, []);

  const initialItem = main.find((item) => item.active);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeWrapper {...{ searchWord, setSearchWord }} />}
      >
        <Route index element={<Main {...{ searchWord }} />} />
        <Route path="collection">
          <Route
            path={initialItem?.name}
            element={<CurrentItem initialItem={initialItem} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
