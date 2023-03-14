import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { APPLICATION } from "../../apis/@types/application";
import { getPagingApplication } from "../../apis/application";
import { ApplicationLayout } from "../../components/layout/ApplicationLayout";
import { Application } from "../../components/shared/application/Application";
import { Banner } from "../../components/shared/Banner/Banner";
import { GET_PAGING_APPLICATION } from "../../constants/keys";

export const Home = () => {
  const navigate = useNavigate();
  const { data } = useQuery<{ applicationList: APPLICATION[] }>(
    [GET_PAGING_APPLICATION],
    getPagingApplication
  );

  return (
    <div>
      <Banner />
      <ApplicationLayout>
        {data?.applicationList?.map((a, index) => {
          return <Application key={index} data={a} />;
        })}
      </ApplicationLayout>
    </div>
  );
};
