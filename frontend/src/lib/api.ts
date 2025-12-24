const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY;

// Fetch Strapi data
export async function getAbout() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/about?populate=*`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching about:', error);
    return null;
  }
}

export async function getSettings() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/setting?populate=*`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
}

// Fetch all videos from channel
export async function getAllVideos(channelId: string, maxResults: number = 4) {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`;
    
    const res = await fetch(url);
    const data = await res.json();
    
    if (data.items && data.items.length > 0) {
      return data.items.map((video: any) => ({
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high.url,
        publishedAt: video.snippet.publishedAt
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

// get Hero
export async function getHero() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/hero?populate=*`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hero:', error);
    return null;
  }
}

// Fetch social links
export async function getSocialLinks() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/social-links`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching social links:', error);
    return [];
  }
}
