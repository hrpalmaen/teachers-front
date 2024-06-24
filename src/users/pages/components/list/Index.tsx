import { useState } from "react";

import { UserDto } from "src/users/interfaces";
import { UserModal } from "../form";
import { useListUsersColumns } from "./hooks";

import { useAuth } from "@/contexts";
import { Table } from "@components";

export const ListUsers = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 15,
  });
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeStatusUser = async (user: UserDto) => {
    console.log("onChangeStatusUser", user);
  };

  const onEditUser = (user: UserDto & { _id: string }) => {
    setIsModalOpen(true);
    return (
      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultValues={user}
      />
    );
    // setIsModalOpen(true);
  };

  const columns = useListUsersColumns({ onEditUser, onChangeStatusUser });

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Table
        columns={columns}
        data={[]}
        loading={false}
        pagination={{ page: 0, pageSize: 15 }}
        rowCount={0}
        setPagination={setPagination}
        paginationHeight={false}
      />
    </>
  );
};
