import { Table } from "@components/Table";
import { useState } from "react";
import { Company } from "@/customers/interface";
import { useColumns } from "./useColumns";

export const ListCompanies = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 15,
  });

  const editData = (customer: Company) => {
    console.log("editData customer", customer);
  };

  const onChangeStatusCompany = async (company: Company) => {
    console.log("onChangeStatusCompany company", company);
  };

  const columns = useColumns({
    editData,
    handleOpenLogs: editData,
    onChangeStatusCompany,
  });

  return (
    <>
      <Table
        columns={columns}
        data={[]}
        loading={false}
        pagination={pagination}
        rowCount={0}
        setPagination={setPagination}
        paginationHeight={false}
      />
    </>
  );
};
