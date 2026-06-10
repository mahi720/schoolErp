// Color configuration for ERP system
// Maps semantic color names to Tailwind classes

const colors = {
  light: {
    background: 'bg-white',
    foreground: 'text-black',
    card: 'bg-white',
    cardForeground: 'text-black',
    border: 'border-gray-200',
    muted: 'bg-gray-100',
    mutedForeground: 'text-gray-600',
    primary: 'bg-blue-500',
    primaryText: 'text-blue-500',
    primaryHover: 'hover:bg-blue-600',
    secondary: 'bg-purple-500',
    accent: 'bg-pink-500',
  },
  dark: {
    background: 'dark:bg-gray-900',
    foreground: 'dark:text-white',
    card: 'dark:bg-gray-800',
    cardForeground: 'dark:text-white',
    border: 'dark:border-gray-700',
    muted: 'dark:bg-gray-700',
    mutedForeground: 'dark:text-gray-300',
    primary: 'dark:bg-blue-200',
    primaryText: 'dark:text-blue-400',
    primaryHover: 'dark:hover:bg-blue-700',
    secondary: 'dark:bg-purple-600',
    accent: 'dark:bg-pink-600',
  }
}

export function getColorClass(semanticColor, isDark = false) {
  const theme = isDark ? colors.dark : colors.light
  return theme[semanticColor] || ''
}

export function getColorClasses(semanticColor) {
  return `${colors.light[semanticColor]} ${colors.dark[semanticColor]}`
}

export default colors
