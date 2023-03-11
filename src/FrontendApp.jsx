import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

export const FrontendApp = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
