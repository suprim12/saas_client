import React, { useEffect } from "react";
import { DashboardLayout } from "@comp";
import { useAppDispatch, postSagaActions } from "@core";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: postSagaActions.FETCH_DATA_POSTS });
  }, [dispatch]);
  return (
    <DashboardLayout>
      <section className="default-padding">
        <h3>asdasd</h3>
      </section>
    </DashboardLayout>
  );
};

export default Home;
