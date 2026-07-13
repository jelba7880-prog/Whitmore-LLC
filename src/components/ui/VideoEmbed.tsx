"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  videoId: string; // YouTube video ID
  title: string; // accessible title for the iframe / play button
  caption: string; // attribution line rendered below the video
}

// Lazy-loaded facade: renders a static thumbnail + play button until clicked,
// so the youtube-nocookie.com iframe (and its third-party JS) never loads
// on page render — protects LCP and page weight.
export default function VideoEmbed({ videoId, title, caption }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-navy-mid">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerated-video; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              sizes="(min-width: 1024px) 300px, 100vw"
              className="object-cover"
            />
            <span
              className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/45"
              aria-hidden="true"
            />
            <span
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-gold/90 transition-colors group-hover:bg-gold"
              aria-hidden="true"
            >
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M0 0L18 11L0 22V0Z" fill="#0D1B2A" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <p className="mt-4 text-center font-ui text-[10px] text-muted">{caption}</p>
    </div>
  );
}
