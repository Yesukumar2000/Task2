import type { NextPage } from "next";
import Layout from "../components/Layout";
import DataProvider from "../containers/home/DataProvider";
import HomeLayout from "@containers/home/HomeLayout";

const Home: NextPage = () => {
  return (
    <Layout title="Settings">
      <DataProvider>
        <HomeLayout />
      </DataProvider>
    </Layout>
  );
};

export default Home;
