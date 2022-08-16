import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Bag from './components/Bag';
import { SidebarDrawerProvider } from './context/SidebarDrawerContext';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    <SidebarDrawerProvider>
      <Bag/>
      <App />
    </SidebarDrawerProvider>
  </ChakraProvider>
);
