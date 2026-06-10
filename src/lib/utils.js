/**
 * Utility functions for the School ERP application
 */

/**
 * Format currency to INR
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount)
}

/**
 * Format date to readable format
 */
export function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format date to short format (DD/MM/YYYY)
 */
export function formatDateShort(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * Format time to readable format
 */
export function formatTime(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Calculate age from date of birth
 */
export function calculateAge(dob) {
  if (!dob) return 0
  const today = new Date()
  const birthDate = new Date(dob)
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}

/**
 * Get status badge color
 */
export function getStatusColor(status) {
  const colors = {
    active: 'bg-green-100 text-green-700',
    inactive: 'bg-red-100 text-red-700',
    pending: 'bg-yellow-100 text-yellow-700',
    paid: 'bg-green-100 text-green-700',
    unpaid: 'bg-red-100 text-red-700',
    present: 'bg-green-100 text-green-700',
    absent: 'bg-red-100 text-red-700',
    late: 'bg-yellow-100 text-yellow-700',
    completed: 'bg-green-100 text-green-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    scheduled: 'bg-gray-100 text-gray-700',
  }
  return colors[status] || 'bg-gray-100 text-gray-700'
}

/**
 * Search items by query
 */
export function searchItems(items, query, searchFields) {
  if (!query.trim()) return items
  
  const lowerQuery = query.toLowerCase()
  return items.filter(item =>
    searchFields.some(field => {
      const value = item[field]
      return value && value.toString().toLowerCase().includes(lowerQuery)
    })
  )
}

/**
 * Sort items
 */
export function sortItems(items, sortField, sortOrder = 'asc') {
  return [...items].sort((a, b) => {
    const aVal = a[sortField]
    const bVal = b[sortField]
    
    if (aVal === null || aVal === undefined) return 1
    if (bVal === null || bVal === undefined) return -1
    
    if (typeof aVal === 'string') {
      return sortOrder === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    }
    
    return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
  })
}

/**
 * Paginate items
 */
export function paginateItems(items, currentPage, itemsPerPage) {
  const startIdx = (currentPage - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage
  return items.slice(startIdx, endIdx)
}

/**
 * Get total pages
 */
export function getTotalPages(totalItems, itemsPerPage) {
  return Math.ceil(totalItems / itemsPerPage)
}

/**
 * Validate email
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (Indian)
 */
export function validatePhone(phone) {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

/**
 * Generate unique ID
 */
export function generateId() {
  return `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Deep clone object
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Merge objects
 */
export function mergeObjects(target, source) {
  return { ...target, ...source }
}
