import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import personalContent from './content/personal.json'
import mediaContent from './content/media.json'

const applyPortfolioMetadata = () => {
  document.title = `${personalContent.name} | ${personalContent.role}`;
  const setMeta = (selector: string, value: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element && value) element.content = value;
  };
  setMeta('meta[name="description"]', personalContent.summary);
  setMeta('meta[name="author"]', personalContent.name);
  setMeta('meta[name="application-name"]', personalContent.name);
  setMeta('meta[property="og:title"]', `${personalContent.name} | ${personalContent.role}`);
  setMeta('meta[property="og:description"]', personalContent.summary);
  setMeta('meta[name="twitter:title"]', `${personalContent.name} | ${personalContent.role}`);
  setMeta('meta[name="twitter:description"]', personalContent.summary);
  setMeta('meta[property="og:image"]', mediaContent.socialPreviewImage);
  setMeta('meta[name="twitter:image"]', mediaContent.socialPreviewImage);
  if (mediaContent.favicon) {
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (icon) icon.href = mediaContent.favicon;
  }
};

applyPortfolioMetadata();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
