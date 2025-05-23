import React, { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

/**
 * Professional Image Viewer Component
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {React.ReactNode} props.children - Content that triggers the image viewer
 * @param {string} [props.alt="Image"] - Alt text for the image
 * @param {Function} [props.onOpen] - Callback when viewer opens
 * @param {Function} [props.onClose] - Callback when viewer closes
 */
const ImageViewer = ({ 
  src, 
  children, 
  alt = "Image", 
  onOpen = () => {}, 
  onClose = () => {} 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Prevent body scroll when viewer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      onOpen();
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, onOpen]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setScale(1);
    setRotation(0);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose();
  }, [onClose]);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const rotate = () => setRotation(prev => (prev + 90) % 360);

  return (
    <>
      {/* Render children directly with onClick handler */}
      {React.cloneElement(children, { 
        onClick: (e) => {
          handleOpen();
          // Preserve any existing onClick on children
          if (children.props.onClick) {
            children.props.onClick(e);
          }
        }
      })}

      {/* Image viewer portal */}
      {isOpen && (
        <div className="fixed inset-0 z-100 bg-black bg-opacity-90 backdrop-blur-sm">
          <div className="flex h-full w-full items-center justify-center p-4">
            {/* Image container */}
            <div className="relative max-h-full max-w-full">
              <img
                src={src}
                alt={alt}
                className="max-h-[calc(100vh-4rem)] max-w-[calc(100vw-4rem)] object-contain transition-all duration-200 ease-in-out"
                style={{ 
                  transform: `scale(${scale}) rotate(${rotation}deg)`,
                }}
              />
            </div>

            {/* Control panel */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 rounded-full bg-gray-800 bg-opacity-70 px-6 py-3 backdrop-blur-sm">
              <button 
                onClick={zoomIn} 
                className="rounded-full p-2 text-white hover:text-black cursor-pointer hover:bg-white hover:bg-opacity-20"
                aria-label="Zoom in"
              >
                <ZoomIn size={20} />
              </button>
              <button 
                onClick={zoomOut} 
                className="rounded-full p-2 text-white hover:text-black cursor-pointer hover:bg-white hover:bg-opacity-20"
                aria-label="Zoom out"
              >
                <ZoomOut size={20} />
              </button>
              <button 
                onClick={rotate} 
                className="rounded-full p-2 text-white hover:text-black cursor-pointer hover:bg-white hover:bg-opacity-20"
                aria-label="Rotate"
              >
                <RotateCw size={20} />
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full cursor-pointer hover:bg-gray-800 bg-opacity-70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-opacity-100"
              aria-label="Close viewer"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageViewer;