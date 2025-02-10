import * as Sentry from '@sentry/browser';

export async function fetchStoreData(query) {
  try {
    console.log("Fetching store data with query:", query);
    const response = await fetch('/api/firecrawl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching store data:', error);
    Sentry.captureException(error);
    throw error;
  }
}