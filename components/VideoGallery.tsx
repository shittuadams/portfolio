import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, X, Clock } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoGalleryProps {
  videos: VideoItem[];
  onBack: () => void;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, onBack }) => {
  const [filter, setFilter] = useState<'all' | 'tutorial' | 'class'>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredVideos = videos.filter(video => {
    if (filter === 'all') return true;
    return video.category === filter;
  });

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-slate-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <div className="p-2 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Back to Home</span>
          </button>
          <h2 className="text-xl font-bold text-slate-900 hidden sm:block">Video Library</h2>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Video Tutorials & Classes
            </span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-8">
            Explore my collection of educational content, from quick coding tips to full-length recorded sessions.
          </p>

          {/* Toggle Filter */}
          <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-slate-100">
             <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === 'all' 
                ? 'bg-slate-900 text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
             >
               All Videos
             </button>
             <button
              onClick={() => setFilter('tutorial')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === 'tutorial' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
             >
               Tutorials
             </button>
             <button
              onClick={() => setFilter('class')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === 'class' 
                ? 'bg-secondary text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
             >
               Class Recordings
             </button>
          </div>
        </div>

        {/* Video Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                layout
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-slate-900 aspect-video cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail Image (YouTube Standard) */}
                <img 
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500"
                />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock size={12} /> {video.duration}
                </div>

                {/* Play Button (Center) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 transform group-hover:scale-110">
                    <Play size={32} className="text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className={`inline-block text-xs font-bold px-2 py-1 rounded mb-2 ${
                      video.category === 'tutorial' ? 'bg-primary text-white' : 'bg-secondary text-white'
                    }`}>
                      {video.category === 'tutorial' ? 'Tutorial' : 'Class Recording'}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-tight mb-2">{video.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 mb-4">{video.description}</p>
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm w-full hover:bg-slate-200 transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <X size={32} />
              </button>

              <div className="aspect-video w-full bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                   <h2 className="text-2xl font-bold text-white">{selectedVideo.title}</h2>
                   <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      selectedVideo.category === 'tutorial' ? 'bg-primary text-white' : 'bg-secondary text-white'
                   }`}>
                      {selectedVideo.category === 'tutorial' ? 'Tutorial' : 'Class Recording'}
                   </span>
                </div>
                <p className="text-slate-400">{selectedVideo.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default VideoGallery;