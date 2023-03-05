import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { APPLICATION } from "../../apis/@types/application";
import { GET_FOUR_LATEST_APPLICATION } from "../../apis/application";
import { ApplicationLayout } from "../../components/layout/ApplicationLayout";
import { Application } from "../../components/shared/application/Application";
import { Banner } from "../../components/shared/banner/Banner";

export const Home = () => {
  const navigate = useNavigate();
  const { data } = useQuery<{ applicationList: APPLICATION[] }>("GET_FOUR_LATEST_APPLICATION", GET_FOUR_LATEST_APPLICATION);

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
