import { useEffect, useRef, useState, useId } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  title: string;
  subtitle?: string;
  variant?: "full" | "compact";
}

function formatTime(t: number) {
  if (!isFinite(t) || isNaN(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title, subtitle, variant = "full" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const labelId = useId();

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  const seek = (v: number) => {
    const a = audioRef.current;
    if (!a || !isFinite(duration)) return;
    a.currentTime = (v / 100) * duration;
    setCurrent(a.currentTime);
  };

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  if (variant === "compact") {
    return (
      <div
        role="region"
        aria-labelledby={labelId}
        className="flex items-center gap-3 w-full"
      >
        <audio ref={audioRef} src={src} preload="metadata" />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
          aria-pressed={playing}
          className="h-10 w-10 border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {playing ? (
            <Pause className="h-4 w-4" fill="currentColor" />
          ) : (
            <Play className="h-4 w-4" fill="currentColor" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div id={labelId} className="font-display text-lg truncate">
            {title}
          </div>
          {subtitle && (
            <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
          )}
        </div>
        <div className="hidden sm:block w-32">
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label={`Seek ${title}`}
            className="w-full accent-primary cursor-pointer"
          />
        </div>
        <div className="text-xs font-mono text-muted-foreground tabular-nums shrink-0">
          {formatTime(current)} / {formatTime(duration)}
        </div>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-labelledby={labelId}
      className="border border-border bg-secondary/40 p-4"
    >
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
          aria-pressed={playing}
          className="h-14 w-14 bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {playing ? (
            <Pause className="h-6 w-6" fill="currentColor" />
          ) : (
            <Play className="h-6 w-6" fill="currentColor" />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-mono text-muted-foreground tracking-widest">
            EMBEDDED PLAYER
          </div>
          <div id={labelId} className="mt-1 font-display truncate">
            {title}
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-[10px] font-mono text-muted-foreground tabular-nums w-10">
              {formatTime(current)}
            </span>
            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              onChange={(e) => seek(Number(e.target.value))}
              aria-label={`Seek ${title}`}
              className="flex-1 accent-primary cursor-pointer"
            />
            <span className="text-[10px] font-mono text-muted-foreground tabular-nums w-10 text-right">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
            aria-pressed={muted}
            className="h-9 w-9 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {muted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={(e) => {
              const v = Number(e.target.value);
              setVolume(v);
              if (v > 0) setMuted(false);
            }}
            aria-label="Volume"
            className="w-20 accent-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
