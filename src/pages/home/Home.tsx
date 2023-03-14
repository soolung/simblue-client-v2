import React from "react";
import { useQuery } from "react-query";
import { APPLICATION } from "../../apis/@types/application";
import { getPagingApplication } from "../../apis/application";
import { ApplicationLayout } from "../../components/layout/ApplicationLayout";
import { Application } from "../../components/shared/application/Application";
import { Banner } from "../../components/shared/Banner/Banner";
import { GET_PAGING_APPLICATION } from "../../constants/keys";

export const Home = () => {
  const { data } = useQuery<{ applicationList: APPLICATION[] }>([GET_PAGING_APPLICATION], getPagingApplication);

  return (
    <div>
      <Banner />
      <ApplicationLayout>
        {data?.applicationList?.map((a) => {
          return <Application data={a} />;
        })}
      </ApplicationLayout>
    </div>
  );
};
