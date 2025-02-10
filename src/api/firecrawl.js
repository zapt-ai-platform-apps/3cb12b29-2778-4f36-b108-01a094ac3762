export async function fetchStoreData(query) {
  try {
    // Dummy implementation; replace with actual API call to FireCrawl.
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
    throw error;
  }
}