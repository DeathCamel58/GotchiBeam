import React, { createContext, ReactNode, useContext, useState } from 'react';

type NfcReaderContextType = {
  status: 'connected' | 'disconnected' | 'error';
  logs: string[]; // Logs for the NFC reader
  connect: () => void;
  disconnect: () => void;
  addLog: (log: string) => void; // Method to add logs
};

const NfcReaderContext = createContext<NfcReaderContextType | undefined>(
  undefined,
);

export function NfcReaderProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<'connected' | 'disconnected' | 'error'>(
    'disconnected',
  );
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (log: string) => {
    setLogs((prevLogs) => {
      const newLogs = [log, ...prevLogs];
      return newLogs.slice(0, 5); // Keep only the last 5 logs
    });
  };

  const connect = () => {
    setStatus('connected');
    addLog('NFC reader connected.');
  };

  const disconnect = () => {
    setStatus('disconnected');
    addLog('NFC reader disconnected.');
  };

  return (
    <NfcReaderContext.Provider
      value={{ status, logs, connect, disconnect, addLog }}
    >
      {children}
    </NfcReaderContext.Provider>
  );
}

export const useNfcReader = () => {
  const context = useContext(NfcReaderContext);
  if (!context) {
    throw new Error('useNfcReader must be used within a NfcReaderProvider');
  }
  return context;
};
