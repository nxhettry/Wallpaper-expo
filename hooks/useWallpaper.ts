export interface Wallpaper {
  url: string;
  name: string;
}

interface FullWallpaper extends Wallpaper {
  library: boolean;
  suggested: boolean;
  liked: boolean;
}

export function useWallpaper(): FullWallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/khje0EArRGCr85ZsiNZCcw",
      name: "Forest",
      library: true,
      suggested: false,
      liked: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/-alnUJDXQZaZkRjEs2kWXA",
      name: "boat",
      library: true,
      suggested: false,
      liked: false,
    },
    {
      url: "https://images.unsplash.com/photo-1722167755205-c6e52c9eca4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwcm92ZWFsfGVufDB8fDB8fHwy",
      name: "tajmahal",
      library: false,
      suggested: true,
      liked: false,
    },
    {
      url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHwy",
      name: "boy",
      library: false,
      suggested: false,
      liked: true,
    },
    {
      url: "https://images.unsplash.com/photo-1603725500773-9c78db8a914a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwcm92ZWFsfGVufDB8fDB8fHwy",
      name: "finger",
      library: false,
      suggested: true,
      liked: true,
    },
    {
      url: "https://images.unsplash.com/photo-1699970218403-530291ead326?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFwcHJvdmVhbHxlbnwwfHwwfHx8Mg%3D%3D",
      name: "Girl",
      library: true,
      suggested: false,
      liked: false,
    },
  ];
}

export function useLibraryWallpaper(): FullWallpaper[] {
  const wallpaper = useWallpaper();

  return wallpaper.filter((wallpaper) => wallpaper.library);
}

export function useLikedWallpaper(): FullWallpaper[] {
  const wallpaper = useWallpaper();

  return wallpaper.filter((wallpaper) => wallpaper.liked);
}

export function useSuggestedWallpaper(): FullWallpaper[] {
  const wallpaper = useWallpaper();

  return wallpaper.filter((wallpaper) => wallpaper.suggested);
}
