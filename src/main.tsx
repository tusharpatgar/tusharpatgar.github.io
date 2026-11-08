import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import siteContent from './content/site.json'

const applyPortfolioMetadata = () => {
  document.title = `${siteContent.personal.name} | ${siteContent.personal.role}`;
  const setMeta = (selector: string, value: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element && value) element.content = value;
  };
  setMeta('meta[name="description"]', siteContent.personal.summary);
  setMeta('meta[name="author"]', siteContent.personal.name);
  setMeta('meta[name="application-name"]', siteContent.personal.name);
  setMeta('meta[property="og:title"]', `${siteContent.personal.name} | ${siteContent.personal.role}`);
  setMeta('meta[property="og:description"]', siteContent.personal.summary);
  setMeta('meta[name="twitter:title"]', `${siteContent.personal.name} | ${siteContent.personal.role}`);
  setMeta('meta[name="twitter:description"]', siteContent.personal.summary);
  setMeta('meta[property="og:image"]', siteContent.media.socialPreviewImage);
  setMeta('meta[name="twitter:image"]', siteContent.media.socialPreviewImage);
  if (siteContent.media.favicon) {
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (icon) icon.href = siteContent.media.favicon;
  }
};

applyPortfolioMetadata();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
