import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const Icon = { light: SunIcon, dark: MoonIcon }[colorMode]

  return (
    <AnimatePresence exiteBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-bock' }}
        key={useColorModeValue('light', 'dark')}
        innitial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={<Icon />}
          onClick={toggleColorMode}
          color={useColorModeValue('gray.700', 'gray.200')}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
