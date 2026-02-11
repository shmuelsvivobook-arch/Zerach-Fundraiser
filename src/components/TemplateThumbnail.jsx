import React, { useEffect, useRef } from 'react';

const TemplateThumbnail = ({ template, logo, decoration, extra }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const scale = 0.25;
        const logicW = 1080;
        const logicH = 1512;

        canvas.width = logicW * scale;
        canvas.height = logicH * scale;

        ctx.save();
        ctx.scale(scale, scale);

        const data = { name: "Text", amount: "Amount", hideText: false };

        if (template.render) {
            template.render(ctx, logicW, logicH, data, logo, decoration, extra);
        }

        ctx.restore();
    }, [template, logo, decoration, extra]);

    return <canvas ref={canvasRef} className="w-full h-full object-contain pointer-events-none" />;
};

export default TemplateThumbnail;
