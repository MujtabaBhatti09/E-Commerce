import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

interface ZoomLensProps {
    src: StaticImport | string;
    alt: string;
    width: number;
    height: number;
    zoomLevel: number;
    lensSize: number;
    className: string;
}

export default function ImageZoom({
    src = "",
    alt = "",
    width = 400,
    height = 400,
    zoomLevel = 2,
    lensSize = 100,
    className = ""
}) {
    const [isHovering, setIsHovering] = useState(false);
    const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current || !containerRef.current) return;

        const rect = containerRef?.current?.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate lens position (centered on cursor)
        const lensX = Math.max(0, Math.min(x - lensSize / 2, width - lensSize));
        const lensY = Math.max(0, Math.min(y - lensSize / 2, height - lensSize));

        setLensPosition({ x: lensX, y: lensY });

        // Calculate zoom position
        const zoomX = -(x * zoomLevel - lensSize / 2);
        const zoomY = -(y * zoomLevel - lensSize / 2);

        setZoomPosition({ x: zoomX, y: zoomY });
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <div
                ref={containerRef}
                className="relative overflow-hidden cursor-crosshair"
                style={{ width, height }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
            >
                <Image
                    ref={imageRef}
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                // style={{ width, height }}
                />

                {/* Magnifying lens */}
                {isHovering && (
                    <div
                        className="absolute border-2 border-white shadow-lg overflow-hidden pointer-events-none"
                        style={{
                            width: lensSize,
                            height: lensSize,
                            left: lensPosition.x,
                            top: lensPosition.y,
                            boxShadow: '0 0 0 2px rgba(0,0,0,0.3), inset 0 0 0 2px rgba(255,255,255,0.8)'
                        }}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            className="absolute"
                            style={{
                                width: width * zoomLevel,
                                height: height * zoomLevel,
                                left: zoomPosition.x,
                                top: zoomPosition.y,
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};