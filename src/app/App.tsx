import { AppProviders } from './providers/AppProviders'
import { AppRouter } from './router'

function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}

export default App
