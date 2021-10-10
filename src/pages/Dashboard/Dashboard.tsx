import React, { useEffect } from "react";
import { DashboardLayout } from "../../components";
import { postSagaActions } from "../../core/sagas/sagaActions";
import { useAppDispatch } from "../../core/store";

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
