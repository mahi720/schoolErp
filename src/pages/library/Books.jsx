import React from 'react'
import { useApp } from '../../context/AppContext'
import DataTable from '../../components/common/DataTable'
import { Plus } from 'lucide-react'

export default function Books() {
  const { books } = useApp()

  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'author', label: 'Author', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'isbn', label: 'ISBN', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          {value}
        </span>
      ),
    },
    { key: 'quantity', label: 'Quantity', sortable: true },
  ]

  const actions = [
    { label: 'View', onClick: (row) => console.log('View', row) },
    { label: 'Edit', onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', variant: 'danger', onClick: (row) => console.log('Delete', row) },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">Library Books</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Manage library book collection</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity">
          <Plus size={20} />
          Add Book
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Total Books</p>
          <p className="text-3xl font-bold text-black dark:text-white mt-2">{books.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Total Copies</p>
          <p className="text-3xl font-bold text-black dark:text-white mt-2">{books.reduce((sum, b) => sum + b.quantity, 0)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Available</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{books.reduce((sum, b) => sum + b.quantity, 0)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Issued</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={books}
        searchFields={['title', 'author', 'isbn']}
        title="Books"
        actions={actions}
      />
    </div>
  )
}
