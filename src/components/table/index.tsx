import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import checkIcon from 'assets/images/verified-check.svg';
import TrashIcon from 'assets/icons/iconTrash';
import ViewIcon from 'assets/icons/iconView';
import SearchInput from 'components/searchInput';
import Pagination from 'components/pagination';
import TableSort from 'components/tableSort';
import { useGetUsersQuery } from 'redux/superAdminApiSlice';
import { formatDate } from 'helpers/dateHelper';

import {
  ActionBtn,
  Inner,
  Table,
  TableContainer,
  Tbody,
  Td,
  TdInner,
  Th,
  Thead,
} from './styles';

// TODO add delete modal
// TODO add view profile

export const TableComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(1);
  const [limit] = useState<number>(5);
  const [search, setSearch] = useState<string>('');
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
  const { data } = useGetUsersQuery({
    page: currentPage,
    limit,
    search,
    order,
  });
  const { t } = useTranslation();

  useEffect(() => {
    const handleSetPages = () => {
      if (data) {
        const totalPageCount = Math.ceil(data.totalCount / limit);
        setTotalPages(totalPageCount);
      }
    };
    handleSetPages();
  }, [data, limit]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSortChange = () => {
    setOrder(order === 'ASC' ? 'DESC' : 'ASC');
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Inner>
      <SearchInput
        placeholder="Search"
        onChange={handleSearchChange}
        value={search}
      />
      <TableSort onClickHandler={handleSortChange} />
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th>{t('table.name')}</Th>
              <Th>{t('table.email')}</Th>
              <Th>{t('table.address')}</Th>
              <Th>{t('table.date')}</Th>
              <Th>{t('table.action')}</Th>
            </tr>
          </Thead>
          <Tbody>
            {data?.users?.map(row => (
              <tr key={row.id}>
                <Td>
                  <TdInner>
                    {row.full_name}{' '}
                    {row.is_verified ? (
                      <span>
                        <img src={checkIcon} />
                      </span>
                    ) : null}
                  </TdInner>
                </Td>
                <Td>
                  <TdInner>{row.email}</TdInner>
                </Td>
                <Td>
                  <TdInner>
                    {row.address} {row.city} {row.country}
                  </TdInner>
                </Td>
                <Td>
                  <TdInner>{formatDate(row.created_at)}</TdInner>
                </Td>
                <Td>
                  <TdInner>
                    <ActionBtn>
                      <ViewIcon />
                    </ActionBtn>
                    <ActionBtn>
                      <TrashIcon />
                    </ActionBtn>
                  </TdInner>
                </Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {totalPages ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </Inner>
  );
};
