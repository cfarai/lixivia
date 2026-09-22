interface SpotifyEmbedProps {
  /** Spotify embed URL, e.g. https://open.spotify.com/embed/track/ID */
  src: string;
  title: string;
  /** 352 for album/playlist embeds, 152 for single-track compact embeds */
  height?: number;
}

export function SpotifyEmbed({ src, title, height = 152 }: SpotifyEmbedProps) {
  return (
    <iframe
      src={src}
      title={`Spotify player: ${title}`}
      width="100%"
      height={height}
      style={{ borderRadius: 0, border: "1px solid var(--border)" }}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      allowFullScreen
    />
  );
}