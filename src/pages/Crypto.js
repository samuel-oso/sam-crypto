import React from "react";
import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";

const Crypto = () => {
  return (
    <section className="xs:w-[80%] w-[90%]  h-full flex flex-col  mb-24 lg:mt-16 mt-8 relative">
      <Filters />
      <TableComponent />
    </section>
  );
};

export default Crypto;
