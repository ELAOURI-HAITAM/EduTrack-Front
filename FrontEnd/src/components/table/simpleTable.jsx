import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const SimpleTable = ({ headers, data, renderActions }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800"
      className="overflow-x-auto mt-4"
    >
      <Table striped>
        <TableHead>
          <TableRow>
            {headers?.map((header, index) => (
              <TableHeadCell key={index}>
                {header}
              </TableHeadCell>
            ))}

            {renderActions && (
              <TableHeadCell>
                <span className="sr-only">Actions</span>
              </TableHeadCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {data?.map((item, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {Object.values(item)?.map((value, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className={
                    cellIndex === 0
                      ? "whitespace-nowrap font-medium text-gray-900 dark:text-white"
                      : ""
                  }
                >
                  {value}
                </TableCell>
              ))}

              {renderActions && (
                <TableCell>{renderActions(item)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SimpleTable;