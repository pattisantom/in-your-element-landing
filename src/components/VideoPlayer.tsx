"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  autoplayMuted?: boolean;
  loop?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src,
  autoplayMuted = false,
  loop = false,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(() => autoplayMuted);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(autoplayMuted);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoplayMuted) {
      video.muted = true;
      video.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(() => {});
    }

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };
    const onLoadedMetadata = () => setDuration(video.duration);
    const onEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("ended", onEnded);
    };
  }, [autoplayMuted]);

  const handleOverlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasInteracted) {
      // First click: unmute and ensure playing
      video.muted = false;
      setIsMuted(false);
      setHasInteracted(true);
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      }
    } else {
      togglePlay();
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = ratio * duration;
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  };

  const showControlsTemp = () => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 2500);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const currentTime = duration ? (progress / 100) * duration : 0;

  return (
    <div
      ref={containerRef}
      className={`relative bg-black rounded-2xl overflow-hidden group cursor-pointer ${className}`}
      onClick={handleOverlayClick}
      onMouseMove={isPlaying ? showControlsTemp : undefined}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        autoPlay={autoplayMuted}
        muted={autoplayMuted}
        loop={loop}
      />

      {/* Dark overlay — shown before first interaction */}
      {!hasInteracted && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
            <Play className="text-brand ml-1" size={36} fill="#534AB7" />
          </div>
          <p className="mt-5 text-white/80 text-sm font-medium">
            Click to play
          </p>
        </div>
      )}

      {/* Pause overlay */}
      {hasInteracted && !isPlaying && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
            <Play className="text-brand ml-1" size={28} fill="#534AB7" />
          </div>
        </div>
      )}

      {/* Controls bar */}
      {hasInteracted && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div
            className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer mb-3 hover:h-2 transition-all"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-brand rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="text-white hover:text-brand transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={toggleMute}
                className="text-white hover:text-brand transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <span className="text-white/70 text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-brand transition-colors"
            >
              <Maximize2 size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Muted indicator */}
      {hasInteracted && isMuted && isPlaying && (
        <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <VolumeX size={12} />
          Click to unmute
        </div>
      )}
    </div>
  );
}
