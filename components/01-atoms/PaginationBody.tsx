import clsx from 'clsx';
import { returnPaginationRange } from '../../lib/paginationUtils';
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeft, ChevronsRight } from 'lucide-react';
import React from 'react';

export interface PaginationBodyProps {
  totalpage: number;
  page: number;
  limit: number;
  siblings: number;
  onPageChange: (value: number | string) => void;
}

const PaginationBody = ({ totalpage, page, limit, siblings, onPageChange }: PaginationBodyProps) => {
  const array: (number|string)[] = returnPaginationRange(totalpage, page, limit, siblings);

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, totalpage * limit);

  return (
    <div className="flex items-center justify-between rounded-lg border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden gap-5 sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="w-full">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startItem}</span> to <span className="font-medium">{endItem}</span>{' '}
            of <span className="font-medium">{totalpage * limit}</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-alpha-dark-200 hover:text-white focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChange('&laquo;')}
            >
              <span className="sr-only">Previous</span>
              <ChevronsLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-alpha-dark-200 hover:text-white focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChange('&lsaquo;')}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {array.map((value) => {
              return (
                <button
                  key={value}
                  aria-current="page"
                  className={clsx(
                    'relative z-10  inline-flex items-center px-4  py-2 text-sm font-semibold hover:bg-alpha-dark-200 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                    value === page ? 'bg-alpha text-white ' : 'text-black'
                  )}
                  onClick={() => onPageChange(value)}
                >
                  {value}
                </button>
              );
            })}

            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1  ring-inset ring-gray-300 hover:bg-alpha-dark-200 hover:text-white focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChange('&rsaquo;')}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-alpha-dark-200 hover:text-white focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChange('&raquo;')}
            >
              <span className="sr-only">Next</span>
              <ChevronsRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationBody;
