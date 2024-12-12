import React, { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa"

const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
    const [leftMargin, setLeftMargin] = useState(56);
    const [rightMargin, setRightMargin] = useState(56);

    const [isDraggingLeft, setIsDraggingLeft] = useState(false);
    const [isDraggingRight, setIsDraggingRight] = useState(false);

    const rulerRef = useRef<HTMLDivElement>(null);

    const handleLeftMouseDown = () => {
        setIsDraggingLeft(true);
    }; 
    const handleRightMouseDown = () => {
        setIsDraggingRight(true);
    };

    const handleMouseMove = (e: React.MouseEvent)

    return (
        <div className="h-6 border-b border-gray-300 flex items-end relative select-none print:hidden">
            <div 
            id="ruler-container"
            className="max-w-[816px] mx-auto w-full h-full relative "
            >
            <Marker 
            position={56}
            isLeft={true}
            isdragging={false}
            onMouseDown={() => {}}
            onDoubleClick={() => {}}
            />
            <Marker 
            position={56}
            isLeft={false}
            isdragging={false}
            onMouseDown={() => {}}
            onDoubleClick={() => {}}
            />
                <div className="absolute inset-x-0 bottom-0 h-full">
                    <div className="relative h-full w-[816px]">
                        {markers.map((marker) => {
                            const position = (marker * 816) / 82;

                            return (
                                <div
                                key={marker}
                                className="absolute bottom-0"
                                style={{ left: `${position}px`}}
                                >
                                    {marker % 10 === 0 && (
                                        <>
                                            <div className="absolute bottom-0 w-[1px] h-2 bg-neutral-500">
                                                <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
                                                    {marker / 10 + 1}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    {marker % 5 === 0 && marker % 10 != 0 && (
                                        <div className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500" />
                                    )}
                                    {marker % 5 != 0 && (
                                        <div className="absolute bottom-0 w-[1px] h-1 bg-neutral-500" />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

interface MarkerProps {
    position: number;
    isLeft: boolean;
    isdragging: boolean;
    onMouseDown: () => void;
    onDoubleClick: () => void;
};

const Marker = ({
    position,
    isLeft,
    isdragging,
    onDoubleClick,
    onMouseDown
}: MarkerProps) => {
    return(
    <div
    className="absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2"
    style={{ [isLeft ? "left" : "right"]: `${position}px`}}
    onMouseDown={onMouseDown}
    onDoubleClick={onDoubleClick}
    >
        <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2" />
    </div>
)}