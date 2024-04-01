import Header from "@/components/header";

import Depositos from "@/components/depositos";
import Ftds from "@/components/ftds";
import { BarChart } from "@tremor/react";
import BarCharts from "@/components/BarCharts";


export default function Home() {
  return (
    <>
    <Header />
    <Depositos />
    <Ftds />
    <BarCharts />
    </>
  );
}
