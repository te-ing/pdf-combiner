import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

// calling IPC exposed from preload script
window.electron.ipcRenderer.on('read-file', async (arg) => {
  console.log(arg);
  return arg;
});

window.electron.ipcRenderer.on('write-file', async (arg) => {
  console.log(arg);
  return arg;
});
