import { useState} from 'react'
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransctionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactioModalOpen, setIsNewTransactioModalOpen] = useState(false);

  function handleOpenNewTransactioModal() {
      setIsNewTransactioModalOpen(true);
  }

  function handleCloseNewTransactioModal() {
      setIsNewTransactioModalOpen(false);
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactioModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactioModalOpen} 
        onRequestClose={handleCloseNewTransactioModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


