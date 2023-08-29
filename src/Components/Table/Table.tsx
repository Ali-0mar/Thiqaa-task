import { styled } from "@stitches/react";

import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export interface IColumnType<T> {
    key: string;
    title: string;
    width?: number;
    //The render function is used when there are some transformation on the data before displaying it
    render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
}

const TableWrapper = styled("table", {
    borderCollapse: "collapse",
    border: "none",
    fontFamily: "Arial",
});

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
    return (
        data && data.length ?
          <TableWrapper>
          <thead>
          <TableHeader columns={columns} />
          </thead>
          <tbody>
          <TableRow data={data} columns={columns} />
          </tbody>
        </TableWrapper> :
          <span>No Classes Yet</span>
      );
}